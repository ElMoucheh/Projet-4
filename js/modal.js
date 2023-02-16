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
const chkblocate = document.getElementsByName("location");
const inpQtt = document.getElementsByName("quantity");

let validForm = {
  firstname: null,
  lastname: null,
  email: null,
  birthdate: null,
  tournament: 0,
  locate: "New York",
  condition: true,
  newsletter: false
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
document.querySelector(".close").addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal from
function closeModal() {
  modalbg.style.display = "none";
}

// Input validation
formData.forEach((input) => input.children[2].addEventListener("blur", displayDataError));
formData.forEach((input) => input.children[2].addEventListener("focus", eraseDataError));

//set location
chkblocate.forEach((loc) => loc.addEventListener("click", displayDataError));

inpQtt[0].addEventListener("change", displayDataError);

function displayDataError(e){

  switch (e.srcElement.name) {
    case "first":
      if(e.srcElement.value.length < 2){
        formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        formData[0].setAttribute("data-error-visible", "true");
        validForm["firstname"] = null;
        console.log(validForm);
      } else {
        validForm["firstname"] = e.srcElement.value;
        console.log(validForm);
      }
      break;
    case "last":
      if(e.srcElement.value.length < 2){
        formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        formData[1].setAttribute("data-error-visible", "true");
        validForm["lastname"] = null;
        console.log(validForm);
      } else {
        validForm["lastname"] = e.srcElement.value;
        console.log(validForm);
      }
      break;
    case "email":
      if(!(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(e.srcElement.value))){
        formData[2].setAttribute("data-error", "Adresse non conforme.");
        formData[2].setAttribute("data-error-visible", "true");
        validForm["email"] = null;
        console.log(validForm);
      } else {
        validForm["email"] = e.srcElement.value;
        console.log(validForm);
      }
      break;
    case "birthdate":
      if(e.srcElement.value.length < 2){
        formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
        formData[3].setAttribute("data-error-visible", "true");
        console.log(validForm);
      }
      break;

    case "quantity":
      validForm["quantity"] = e.srcElement.value;
      console.log(validForm);
      break;

    case "location":
       validForm["locate"] = e.target.defaultValue;
       console.log(validForm);
       break;

    default:
      break;
  }
}

function eraseDataError(e){
  e.target.parentElement.removeAttribute("data-error");
  e.target.parentElement.removeAttribute("data-error-visible");
}