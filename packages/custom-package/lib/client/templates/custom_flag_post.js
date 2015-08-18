Telescope.downvoteItem = function (collection, itemId, user) {

  user = typeof user === "undefined" ? Meteor.user() : user;
  var collectionName = collection._name.slice(0,1).toUpperCase()+collection._name.slice(1);
  var item = collection.findOne(itemId);

  // make sure user has rights to downvote first
  if (!user || !Users.can.vote(user, true)  || hasFlaggedItem(item, user))
    return false;

  // ------------------------------ Callbacks ------------------------------ //

  // run all downvote callbacks on item successively
  item = Telescope.callbacks.run("flag", item);

  // ----------------------------------------------------------------------- //

  var votePower = getVotePower(user);

  // in case user is downvoting a previously upvoted item, cancel upvote first
  // Telescope.cancelUpvote(collection, item, user);

  // Votes & Score
  var result = collection.update({_id: item && item._id, downvoters: { $ne: user._id }},{
    $addToSet: {downvoters: user._id},
    // $inc: {downvotes: 1, baseScore: -votePower},
    $set: {inactive: false}
  });

  if (result > 0) {
    function flagNotification (post) {

      var adminIds = _.pluck(Users.find({'isAdmin': true}, {fields: {_id:1}}).fetch(), '_id');
      var notifiedUserIds = _.pluck(Users.find({'telescope.notifications.posts': true}, {fields: {_id:1}}).fetch(), '_id');
      var notificationData = {
        post: _.pick(post, '_id', 'userId', 'title', 'url', 'vote')
      };

      // remove post author ID from arrays
      adminIds = _.without(adminIds, post.userId);
      notifiedUserIds = _.without(notifiedUserIds, post.userId);

      
        // if post is pending, only notify admins
    Herald.createNotification(adminIds, {courier: 'newFlaggedPost', data: flagNotification});

    }
    Telescope.callbacks.add("postFlagAsync", flagNotification);
    // Add item to list of downvoted items
    var vote = {
      itemId: item._id,
      votedAt: new Date(),
      power: votePower
    };
    addVote(user._id, vote, collectionName, 'down');

    // extend item with baseScore to help calculate newScore
    // item = _.extend(item, {baseScore: (item.baseScore - votePower)});
    Telescope.updateScore({collection: collection, item: item, forceUpdate: true});

    // if the item is being upvoted by its own author, don't give karma
    if (item.userId !== user._id)
      modifyKarma(item.userId, votePower);

    // --------------------- Server-Side Async Callbacks --------------------- //

    Telescope.callbacks.runAsync("downvoteAsync", item);

    // ----------------------------------------------------------------------- //
  }
  // console.log(collection.findOne(item._id));
  return true;
};

Meteor.methods({
  flagPost: function (postId) {
    check(postId, String);
    return Telescope.downvoteItem.call(this, Posts, postId);
  }
});
