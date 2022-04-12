let currentSlideIndex = 0;

function showSlide(indexToShow) {
  debugger;
  let slide1 = document.getElementById('slide1');
  let slide2 = document.getElementById('slide2');
  let slide3 = document.getElementById('slide3');
  let slide4 = document.getElementById('slide4');
  let slide5 = document.getElementById('slide5');
  let slide6 = document.getElementById('slide6');

  let slides = [slide1, slide2, slide3, slide4, slide5, slide6];

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    if (i != currentSlideIndex) {
      loopSlide.style.display = 'none';
    } else {
      loopSlide.style.display = 'block';
    }
  }
}

function showNextSlide() {
  currentSlideIndex += 1;
  showSlide();
}

function showPreviousSlide() {
  currentSlideIndex -= 1;
  showSlide();
}

showSlide();
