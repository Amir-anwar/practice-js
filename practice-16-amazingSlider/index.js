const slides = Array.from(document.querySelectorAll('.glide__slide'));
const glideNum = document.querySelector('.glide__number');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const slidesCount = slides.length;
let currentSlide = 0;

function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}

function check() {
  // number
  glideNum.textContent = `${currentSlide + 1} OF ${slidesCount}`;

  // remove actice classes
  removeActive();

  slides[currentSlide].classList.add('active');

  if (currentSlide === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (currentSlide === slidesCount - 1) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}

check();

// Click Handlers
nextBtn.onclick = () => {
  if (currentSlide < slidesCount - 1) {
    currentSlide += 1;
    check();
  } else {
    return false;
  }
  return true;
};
prevBtn.onclick = () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    check();
  } else {
    return false;
  }
  return true;
};
