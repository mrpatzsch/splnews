// add template module to the hero zone
Telescope.modules.add("hero", {
  template: 'hello',
  order: 1
});

Telescope.modules.remove("profileDisplay", "user_downvoted_posts");

// Telescope.modules.remove("secondaryNav", "user_menu");
Telescope.modules.add("secondaryNav", "user_menu", {
	template: "custom_user_menu"
});

Telescope.modules.add("postMeta", "post_admin", {
	template: "custom_post_admin"
});

Telescope.modules.add("top", {
  template: 'posts_views_nav',
  order: 99,
  only: ["top_karma"]
});