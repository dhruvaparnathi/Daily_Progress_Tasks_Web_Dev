
let ele = document.querySelectorAll(".ele");

ele.forEach(function (val) {
    let eleximg = val.querySelector("img");
  val.addEventListener("mousemove", function (dets) {
    eleximg.style.left = dets.x + "px";
    eleximg.style.top = dets.y + "px";
    eleximg.style.display = "inline-block";
    eleximg.style.transform = "translate(-50%, -50%) ";
  });
  val.addEventListener("mouseleave", function () {
    eleximg.style.display = "none";
  });
});
