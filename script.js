window.onload = function () {
  alert("Welcome to Lochquarry Outdoor Centre!");
};
const images = document.querySelectorAll("img");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (img.style.width === "400px") {
      img.style.width = "700px";
    } else {
      img.style.width = "400px";
    }
  });
});
