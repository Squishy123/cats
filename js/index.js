let main = document.getElementById("main");
let m = new Dragend(document.getElementById("main"), {
  pageClass: "swipe-page",
  direction: "horizontal",
  disableScroll: true,
});
  console.log(m)
let keys = [];

window.addEventListener("keydown", function(e) {

  keys[e.which] = true;
  if (keys[39])
    main.dragend("right");
  else if (keys[37])
    main.dragend("left");
});
