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

function loadFirst () {
  videos[0].load();
}

// Code that moves to the next slide
next.addEventListener("click", function () {
  if (current === 0)
    document.getElementById("prev").classList.remove("hidden");
    document.getElementById("los").classList.add("hidden");
  videos[current].pause();
  clicking();
  slides[current].classList.remove("active");
  current ++;
  if (current === slides.length-1)
    document.getElementById("next").classList.add("hidden");
  slides[current].classList.add("active");
  numbers[current].classList.add("number-active");
  videos[current].load();
});

// Code that moves to the previous slide
previous.addEventListener("click", function () {
  if (current === slides.length-1)
    document.getElementById("next").classList.remove("hidden");
  videos[current].pause();
  clicking();
  slides[current].classList.remove("active");
  numbers[current].classList.remove("number-active");
  current --;
  if (current === 0)
    document.getElementById("prev").classList.add("hidden");
  slides[current].classList.add("active");
  videos[current].load();
});


