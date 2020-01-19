var carousel = document.querySelector(".container-carrousel__hide");
var expertise = document.querySelectorAll(".expertise--conseil__hide");
var nico = document.querySelector(".enterprise--nico");
var alex = document.querySelector(".enterprise--alex");
var adri = document.querySelector(".enterprise--adri");
console.log(expertise);

console.log(carousel);

var waypoint = new Waypoint({
  element: carousel,
  handler: function(direction) {
    carousel.classList.toggle("container-carrousel__scroll");
  },
  offset: "80%"
});

console.log(carousel);

var waypoint = new Waypoint({
  element: expertise[0],
  handler: function(direction) {
    expertise[0].className = "expertise--conseil__show";
    expertise[0].classList.add("is-scroll__right");
  },
  offset: "90%"
});

var waypoint = new Waypoint({
  element: expertise[1],
  handler: function(direction) {
    expertise[1].className = "expertise--conseil__show";
    expertise[1].classList.add("is-scroll__left");
  },
  offset: "90%"
});

var waypoint = new Waypoint({
  element: expertise[2],
  handler: function(direction) {
    expertise[2].className = "expertise--conseil__show";
    expertise[2].classList.add("is-scroll__right");
  },
  offset: "90%"
});

var waypoint = new Waypoint({
  element: nico,
  handler: function(direction) {
    nico.className = "enterprise--nico__show ";
    nico.classList.add("is_scroll_top");
  },
  offset: "90%"
});

var waypoint = new Waypoint({
  element: alex,
  handler: function(direction) {
    alex.className = "enterprise--adri__show ";
    alex.classList.add("is_scroll_bottom");
  },
  offset: "90%"
});

var waypoint = new Waypoint({
  element: adri,
  handler: function(direction) {
    adri.className = "enterprise--adri__show ";
    adri.classList.add("is_scroll_top");
  },
  offset: "90%"
});
