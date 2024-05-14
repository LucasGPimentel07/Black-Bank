"use strict"


let btn = document.getElementById('btn');


btn.addEventListener('click', function (){
    document.getElementById('navLinkContainer').classList.toggle('showNavLinks');
})


window.onscroll = function() {myFunction()};


let navbar = document.getElementById("navbar");


let sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}