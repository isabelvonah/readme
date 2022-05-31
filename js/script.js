var previous = document.querySelector(".prev");
var next = document.querySelector(".next");
var slides = document.getElementsByClassName("slide");

var numbers = document.getElementsByClassName("number");

var videos = document.getElementsByClassName("video"); 

var click = new Audio("../sounds/click.mp3");

var current = 0;

function clicking() {
  click.play();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Code that moves to the next slide
next.addEventListener("click", function () {
  videos[current].pause();
  clicking();
  slides[current].classList.remove("active");
  numbers[current].className = numbers[current].className.replace(" bg-primary", " bg-secondary");
  current ++;
  if (current === slides.length)
    current = 0;
  slides[current].classList.add("active");
  numbers[current].className = numbers[current].className.replace(" bg-secondary", " bg-primary");
  videos[current].load();
});

// Code that moves to the previous slide
previous.addEventListener("click", function () {
  videos[current].pause();
  clicking();
  slides[current].classList.remove("active");
  numbers[current].className = numbers[current].className.replace(" bg-primary", " bg-secondary");
  current --;
  if (current < 0)
    current = (slides.length - 1);
  slides[current].classList.add("active");
  numbers[current].className = numbers[current].className.replace(" bg-secondary", " bg-primary");
  videos[current].load();
});


