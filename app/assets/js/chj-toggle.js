$("[data-toggle]").on("click", function(event) {
  event.preventDefault();
  
  var
    $thisEl = $(this),
    $elToggle = $thisEl.data("toggle"),
    $elAnimate = $thisEl.data("animate");

  $html
    .toggleClass($elToggle);

  $thisEl
    .toggleClass("toggle--is-active");

  nameAnimate($elAnimate);
});
