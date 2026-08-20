function toggleAbout() {
  const header = document.querySelector('.about-header');
  const content = document.querySelector('.about-content');

  header.classList.toggle('active');
  content.classList.toggle('show');
}
