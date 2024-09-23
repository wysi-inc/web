htmx.onLoad(function (content) {
  const sortables = content.querySelectorAll(".sortable");
  for (let i = 0; i < sortables.length; i++) {
    const sortable = sortables[i];
    const sortableInstance = new Sortable(sortable, {
      animation: 150,
      ghostClass: "blue-background-class",

      // Make the `.htmx-indicator` unsortable
      filter: ".htmx-indicator",
      onMove: function (evt) {
        return evt.related.className.indexOf("htmx-indicator") === -1;
      },

      // Disable sorting on the `end` event
      onEnd: function (evt) {
        this.option("disabled", true);
      },
    });

    // Re-enable sorting on the `htmx:afterSwap` event
    sortable.addEventListener("htmx:afterSwap", function () {
      sortableInstance.option("disabled", false);
    });
  }
});
