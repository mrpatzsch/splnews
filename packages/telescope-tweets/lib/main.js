var tweetCountProperty = {
  propertyName: 'tweetCount',
  propertySchema: {
    type: Number,
    label: 'tweetCount',
    optional: true,
    autoform: {
      editable: false,
      omit: true
    }
  }
}
Meteor.methods({
  getPostsTweetCount: function (limit) {
    if (Meteor.user())
      getPostsTweetCount(limit);
  }
});