const floatingCTA = document.querySelector('.floating-cta, cta');
const floatingDot = document.querySelector('.floating-dot');
const floatingAction = document.querySelector('.floating-action');


floatingDot.addEventListener('click', () => {
  floatingCTA.classList.toggle('open');
});

floatingAction.addEventListener('click', () => {
  window.open('https://calendly.com/your-link', '_blank');
});

document.addEventListener('click', (e) => {
  if (!floatingCTA.contains(e.target)) {
    floatingCTA.classList.remove('open');
  }
});


document.querySelectorAll('.cta').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://calendly.com/your-link', '_blank');
  });
});