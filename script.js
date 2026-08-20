function toggleAbout() {
  const btn = document.querySelector('.about-toggle');
  const content = document.querySelector('.about-content');

  btn.classList.toggle('active');
  content.classList.toggle('open');
}
