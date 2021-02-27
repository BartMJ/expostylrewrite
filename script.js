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
        isMenuOpen = true
    } else {
        sideMenu.style.display = "none"
        isMenuOpen = false
    }
}
function showNav() {
        dropNav.style.display = 'block'

}
function hideNav() {
    dropNav.style.display = 'none'

}
// dropNav.style.display = 'block'
