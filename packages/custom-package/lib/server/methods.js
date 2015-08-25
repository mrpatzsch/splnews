Meteor.methods({
  getPostsTweetCount: function (limit) {
    if (Meteor.user())
      getPostsTweetCount(limit);
  }
});
