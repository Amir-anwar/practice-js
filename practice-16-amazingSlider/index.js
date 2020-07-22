const slides = Array.from(document.querySelectorAll('.glide__slide'));
const glideNum = document.querySelector('.glide__number');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const slidesCount = slides.length;
let currentSlide = 0;

check();

// Click Handlers
nextBtn.onclick = () => {
  if (currentSlide < slidesCount -1) {
    currentSlide++;
    check();
  } else {
    return false;
  }
};
prevBtn.onclick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    check();
  } else {
    return false;
  }
};


function check() {
  // number
  glideNum.textContent = `${currentSlide + 1} OF ${slidesCount}`;

  // remove actice classes
  removeActive();

  slides[currentSlide].classList.add('active');

  (currentSlide == 0) ?
    prevBtn.classList.add('disabled') :
    prevBtn.classList.remove('disabled');
  (currentSlide == slidesCount - 1) ?
    nextBtn.classList.add('disabled') :
    nextBtn.classList.remove('disabled');
};

function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}

