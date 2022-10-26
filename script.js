// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

//Server Time
function showTime() {
  var a_p = "";
  var today = new Date();
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();
  if (curr_hour < 12) {
    a_p = "AM";
  } else {
    a_p = "PM";
  }
  if (curr_hour == 0) {
    curr_hour = 12;
  }
  if (curr_hour > 12) {
    curr_hour = curr_hour - 12;
  }
  curr_hour = checkTime(curr_hour);
  curr_minute = checkTime(curr_minute);
  curr_second = checkTime(curr_second);
  document.getElementById("stime").innerHTML =
    "Server Time: " +
    curr_hour +
    ":" +
    curr_minute +
    ":" +
    curr_second +
    " " +
    a_p;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(showTime, 500);

// Greeting
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.getElementById("time").innerHTML = "Hello, Good Morning!";
if (h >= 10 && h < 15) document.getElementById("time").innerHTML = "Hello, Good Afternoon!";
if (h >= 15 && h < 18) document.getElementById("time").innerHTML = "Hello, Good Evening!";
if (h >= 18 || h < 4) document.getElementById("time").innerHTML = "Hello, Good Night!";

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

var typed = new Typed(".typing", {
  strings: ["Binus University Student", "Member of BNCC Bandung",
  "Part of HIMTI Bandung", "Graphic Designer", "Gamers"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true
});

