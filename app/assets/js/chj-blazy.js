var bLazy = new Blazy({
  selector: ["[data-lazy] img"],
  success: function(element) {
    $(element).closest("[data-lazy]").addClass("lazy--is-loaded");
  },
  successClass: "image--is-loaded"
});
