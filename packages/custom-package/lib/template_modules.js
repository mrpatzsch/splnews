// add template module to the hero zone
Telescope.modules.add("hero", {
  template: 'hello',
  order: 1
});

Telescope.modules.remove("profileDisplay", "user_downvoted_posts");

Telescope.modules.add("secondaryNav", "user_menu", {
	template: 'custom_sidebar'
});