var selectLocation = "";

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM Input Form
const iptFirst = document.getElementById("first");
const iptLast = document.getElementById("last");
const iptEmail = document.getElementById("email");
const iptBirthdate = document.getElementById("birthdate");
const locate = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
document.querySelector(".close").addEventListener("click", closeModal);

//set location
locate.forEach((loc) => loc.addEventListener("click", function(loc){
  selectLocation = loc.target.defaultValue;
  console.log(selectLocation);
}));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal from
function closeModal() {
  modalbg.style.display = "none";
}