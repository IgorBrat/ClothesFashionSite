window.addEventListener('scroll', reveal);

function reveal() {
  const sections = document.querySelectorAll('.reveal');

  for section in sections {
    let windowHeight = window.innerHeight;
    let revealTop = section.getBoundingClientRect().top;
    let revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
    else {
      section.classList.remove('active');
    }
  }
};
