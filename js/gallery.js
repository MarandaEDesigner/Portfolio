// creating an Array (aka list) of slideshow classes
let slideshowClasses = ['slideshow1', 'slideshow2', 'slideshow3', 'slideshow4', 'slideshow5',];

// creating an Object to store each slideshow's current slide index
let slideshowIndexes = {};
// this for loop initializes each slideshow's current index
// to be the first slide
for (let i = 0; i < slideshowClasses.length; i++) {
  let slideshowClass = slideshowClasses[i];
  // initializing indexes for all slideshows to the first slide
  slideshowIndexes[slideshowClass] = 1;
  // displaying the first slide
   showSlides(slideshowClass, 1);
}
// takes two input parameters:
//  slideshowClass, which is the class of the slideshow we want to update
//  slideIndexIncrement, which is the number we add to the current index

function plusSlides(slideshowClass, slideIndexIncrement) {
  slideshowIndexes[slideshowClass] += slideIndexIncrement;
  showSlides(slideshowClass, slideshowIndexes[slideshowClass]);
}

// takes two input parameters:
//  slideshowClass, which is the class of the slideshow we want to update
//  indexToSet, which is the new index we want to set the current index to
function currentSlide(slideshowClass, indexToSet) {
  slideshowIndexes[slideshowClass] = indexToSet;
  showSlides(slideshowClass, slideshowIndexes[slideshowClass]);
}
// takes two input parameters:
//  slideshowClass, which is the class of the slideshow we want to update
//  indexToDisplay, which is the index we want to display

function showSlides(slideshowClass, indexToDisplay) {
  let i;
  // create the selectors for the slides and dots
  // e.g. ".slideshow1 .mySlides"
  let slidesSelector = "." + slideshowClass + " .mySlides";
  let dotsSelector = "." + slideshowClass + " .dot";

  // use the selectors to query for all matching elements

  let slides = document.querySelectorAll(slidesSelector);
  let dots = document.querySelectorAll(dotsSelector);

  // get the index for the input slideshowClass
  // from our slideshowIndexes object
  let slideIndex = indexToDisplay;
  // the following if statements adjust the index if it goes past the
  // beginning or end of the images
  if (indexToDisplay > slides.length) {
    slideIndex = 1;
  }
  if (indexToDisplay < 1) {
    slideIndex = slides.length;
  }

  slideshowIndexes[slideshowClass] = slideIndex;

  // sets all slides' display to 'none'
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// remove the 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
// set the current slide to display and set the matching dot to be active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
