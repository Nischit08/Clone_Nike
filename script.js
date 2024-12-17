var a = document.querySelector("#elcontainer");
var block = document.querySelector("#fixed-img");
a.addEventListener("mouseenter", function () {
  block.style.display = "block";
});
a.addEventListener("mouseleave", function () {
  block.style.display = "none";
});
var b = document.querySelectorAll("#elem");
b.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-img");
    block.style.backgroundImage = `url(${image})`;
  });
});
var tl = gsap.timeline();
var db = document.querySelector("#nf");
var links = document.querySelector("#new h4");
links.addEventListener("mouseenter", function () {
  tl.to("#nf", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.out",
    backgroundColor: "white",
    color: "black",
    fontFamily: "cent",
  });
});
links.addEventListener("mouseleave", function () {
  tl.to("#nf", {
    opacity: 0,
  });
});
var link1 = document.querySelector("#men h4");
link1.addEventListener("mouseenter", function () {
  tl.to("#men-sec", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.out",
    backgroundColor: "white",
    color: "black",
    fontFamily: "cent",
  });
});
link1.addEventListener("mouseleave", function () {
  tl.to("#men-sec", {
    duration: 1,
    opacity: 0,
  });
});

var n = document.querySelector("#women h4");
n.addEventListener("mouseenter", function () {
  tl.to("#nav2", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.out",
    backgroundColor: "white",
    color: "black",
    fontFamily: "cent",
  });
});
n.addEventListener("mouseleave", function () {
  tl.to("#nav2", {
    opacity: 0,
  });
});
var kids = document.querySelector("#kids h4");
kids.addEventListener("mouseenter", function () {
  tl.to("#kc h5", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.out",
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.715)",
    fontFamily: "cent",
  });
  tl.to("#kc", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.out",
    backgroundColor: "white",
    color: "black",
    fontFamily: "cent",
  });
});
kids.addEventListener("mouseleave", function () {
  tl.to("#kc", {
    opacity: 0,
  });
});
var mf = document.querySelector("#poo-cont");
mf.addEventListener("mouseenter", function () {
  tl.to("#foot", {
    top: "54%",
  });
});
mf.addEventListener("mouseleave", function () {
  tl.to("#foot", {
    top: "27%",
  });
});
