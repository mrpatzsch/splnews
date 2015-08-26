Template.user_menu.helpers({
  avatarUrl: function() { 
    var userId = Meteor.user(); 
    return getAvatarUrl(userId); 
  },
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