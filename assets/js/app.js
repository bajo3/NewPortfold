// Espera a que la página termine de cargar antes de ocultar el loader
window.addEventListener('load', function () {
  hideLoader();
});

// Oculta el loader después de 3 segundos
setTimeout(hideLoader, 3000);

let loader = document.querySelector('.loader');

function hideLoader() {
  loader.classList.add('hide');
}

// Scroll to top
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// More about section
const moreAboutSection = document.querySelector('.more-about');
const rotateSection = (e) => {
  const angleX = (e.offsetY / moreAboutSection.offsetHeight - 0.5) * 30;
  const angleY = (e.offsetX / moreAboutSection.offsetWidth - 0.5) * 30;
  moreAboutSection.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
};
moreAboutSection.addEventListener('mousemove', rotateSection);
moreAboutSection.addEventListener('mouseleave', () => {
  moreAboutSection.style.transform = 'perspective(1000px) rotateX(5deg)';
});
