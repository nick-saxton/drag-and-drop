// Drag and drop
(function() {
  var dragElement = null;

  var selections = document.querySelectorAll(".selection");

  for (var i = 0; i < selections.length; i++) {
    var selection = selections[i];

    selection.addEventListener("mousedown", function(event) {
      dragElement = this;
      dragElement.classList.add("dragging");
    });

    selection
      .querySelector(".selection-remove")
      .addEventListener("click", function() {
        selection.parentElement.removeChild(selection);
      });
  }

  document.addEventListener("mousemove", function(event) {
    if (dragElement) {
      dragElement.style.left = event.clientX;
      dragElement.style.top = event.clientY;
    }
  });

  document.addEventListener("mouseup", function(event) {
    if (dragElement) {
      dragElement.classList.remove("dragging");
      dragElement = null;
    }
  });
})();
