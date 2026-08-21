function toggleAbout() {
  const btn = document.querySelector('.about-toggle');
  const content = document.querySelector('.about-content');

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".seo-content-title"); // h2
  const content = document.querySelector(".seo-content");

  title.addEventListener("click", function () {
    content.classList.toggle("expanded");
  });
});


