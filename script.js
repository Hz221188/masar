<script>
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".seo-content-title"); // h2
  const content = document.querySelector(".seo-content");

  title.addEventListener("click", function () {
    content.classList.toggle("expanded");
  });
});
</script>
