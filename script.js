window.onload = function () {
  // Only show pop-up on the homepage (index.html)
  if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
    alert("Welcome to Lochquarry Outdoor Centre!");
  }
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
