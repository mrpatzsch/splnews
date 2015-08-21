function alertThanks (post) {
  alert("Submitted");
  return post;
}
Telescope.callbacks.add("postSubmitClient", alertThanks);

Telescope.utils.icons.upvote = "arrow-up";