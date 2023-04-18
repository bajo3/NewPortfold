const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

//Scroll to top
// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");
// scroll to top functionality

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const moreAboutSection = document.querySelector('.more-about');

moreAboutSection.addEventListener('mousemove', function(e) {
  const angleX = (e.offsetY / moreAboutSection.offsetHeight - 0.5) * 30;
  const angleY = (e.offsetX / moreAboutSection.offsetWidth - 0.5) * 30;

  moreAboutSection.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

moreAboutSection.addEventListener('mouseleave', function() {
  moreAboutSection.style.transform = 'perspective(1000px) rotateX(5deg)';
});
