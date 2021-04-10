const myNav = document.querySelector(".outer-navbar")
const sideMenu = document.querySelector("#side-menu")
const close = document.querySelector("#close")
const dropNav = document.querySelector("#drop-nav")
const aOnHover = document.querySelector("#inner-nav a")

dropNav.style.display = 'none'

let sideIsOpen = false
let isMenuOpen = false

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    myNav.style.top = "-10px";
  }
  if (currentScrollPos === 0) {
    myNav.style.top = "48px";
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
    if(!isMenuOpen) {
        sideMenu.style.display = "block"
        setTimeout(() => {
          sideMenu.style.width = "40vw"
        }, 201)
        isMenuOpen = true

    } else {
      sideMenu.style.width = "0"
        setTimeout(() => {
          sideMenu.style.display = "none"
          
        }, 201)
        isMenuOpen = false
        
    }
}
function showNav() {
        dropNav.style.display = 'block'

}
function hideNav() {
    dropNav.style.display = 'none'

}

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}