var waypoint = new Waypoint({
  element: document.getElementById(".container-carrousel"),
  handler: function(direction) {
    alert("carousel-scroll");
  },
  offset: "10%"
});
