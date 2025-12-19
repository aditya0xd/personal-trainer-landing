const stickyCTA = document.querySelector('.sticky-cta');
const heroSection = document.querySelector('.hero');
const finalCTASection = document.querySelector('.final-cta');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroBottom = heroSection.offsetHeight;
  const finalCTATop = finalCTASection.offsetTop - window.innerHeight;

  if (scrollY > heroBottom * 0.8 && scrollY < finalCTATop) {
    stickyCTA.classList.add('visible');
  } else {
    stickyCTA.classList.remove('visible');
  }
});



document.querySelectorAll('.cta, .sticky-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://calendly.com/your-link', '_blank');
  });
});
