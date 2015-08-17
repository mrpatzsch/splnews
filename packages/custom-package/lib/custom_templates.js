

// // Custom Post Field

// Votes.addField({
//   fieldName: 'flagPost',
//   fieldSchema: {
//     type: Button,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom Comment Field

// Comments.addField({
//   fieldName: 'customCommentField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom User Field

// Users.addField({
//   fieldName: 'customUserField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom Setting Field

// Settings.addField({
//   fieldName: "customSettingsField",
//   fieldSchema: {
//     type: String,
//     optional: true,
//     autoform: {
//       group: "customGroup"
//     }
//   }
// });
Template.avatar_post.replaces("post_avatars");

Template.user_menu.helpers({
  menuLabel: function () {
    return Users.getDisplayName(Meteor.user());
  },
  menuItems: function () {
    return Telescope.menuItems.get("userMenu");
  },
  menuMode: function () {
    if (!!this.mobile) {
      return 'list';
    }
  }
});

Telescope.downvoteItem = function (collection, itemId, user) {

  // user = typeof user === "undefined" ? Meteor.user() : user;
  // var collectionName = collection._name.slice(0,1).toUpperCase()+collection._name.slice(1);
  // var item = collection.findOne(itemId);

  // // make sure user has rights to downvote first
  // if (!user || !Users.can.vote(user, true)  || hasDownvotedItem(item, user))
  //   return false;

  // // ------------------------------ Callbacks ------------------------------ //

  // // run all downvote callbacks on item successively
  // item = Telescope.callbacks.run("downvote", item);

  // // ----------------------------------------------------------------------- //

  // var votePower = getVotePower(user);

  // // in case user is downvoting a previously upvoted item, cancel upvote first
  // Telescope.cancelUpvote(collection, item, user);

  // // Votes & Score
  // var result = collection.update({_id: item && item._id, downvoters: { $ne: user._id }},{
  //   // $addToSet: {downvoters: user._id},
  //   // $inc: {downvotes: 1, baseScore: -votePower},
  //   $set: {inactive: false}
  // });

  // if (result > 0) {
  //   // Add item to list of downvoted items
  //   var vote = {
  //     itemId: item._id,
  //     votedAt: new Date(),
  //     power: votePower
  //   };
  //   addVote(user._id, vote, collectionName, 'down');

  //   // extend item with baseScore to help calculate newScore
  //   item = _.extend(item, {baseScore: (item.baseScore - votePower)});
  //   Telescope.updateScore({collection: collection, item: item, forceUpdate: true});

  //   // if the item is being upvoted by its own author, don't give karma
  //   if (item.userId !== user._id)
  //     modifyKarma(item.userId, votePower);

  //   // --------------------- Server-Side Async Callbacks --------------------- //

  //   Telescope.callbacks.runAsync("downvoteAsync", item);

  //   // ----------------------------------------------------------------------- //
  // }
  // console.log(collection.findOne(item._id));
  return true;
};

