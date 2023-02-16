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
const formSub = document.querySelectorAll(".formSub");
const condition = document.getElementById("checkbox1");
const newsletter = document.getElementById("checkbox2");
const submit = document.getElementById("sub");
const modal = document.getElementById("modal");

console.log(formSub);

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

formSub.forEach((input) => input.children[0].addEventListener("blur", eraseDataError));

//set location
chkblocate.forEach((loc) => loc.addEventListener("click", displayDataError));

inpQtt[0].addEventListener("change", displayDataError);
condition.addEventListener("click", switchData);
newsletter.addEventListener("click", switchData);

function displayDataError(e){

  switch (e.srcElement.name) {
    case "first":
      if(e.srcElement.value.length < 2){
        formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        formData[0].setAttribute("data-error-visible", "true");
        validForm["firstname"] = null;
      } else {
        validForm["firstname"] = e.srcElement.value;
      }
      break;
    case "last":
      if(e.srcElement.value.length < 2){
        formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        formData[1].setAttribute("data-error-visible", "true");
        validForm["lastname"] = null;
      } else {
        validForm["lastname"] = e.srcElement.value;
      }
      break;
    case "email":
      if(!(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(e.srcElement.value))){
        formData[2].setAttribute("data-error", "Adresse non conforme.");
        formData[2].setAttribute("data-error-visible", "true");
        validForm["email"] = null;
      } else {
        validForm["email"] = e.srcElement.value;
      }
      break;
    case "birthdate":
      if(e.srcElement.value.length < 2){
        formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
        formData[3].setAttribute("data-error-visible", "true");
        validForm["birthdate"] = null;
      } else {
        const birthdate = new Date(e.srcElement.value);
        const birthdateMS = Date.now() - birthdate.getTime();
        const age = Math.floor(birthdateMS / (365.25 * 24 * 60 * 60 * 1000));
        if (age >= 18 && age <= 100) {
          validForm["birthdate"] = e.srcElement.value;
        } else {
          formData[3].setAttribute("data-error", "Cette date ne correspond pas avec nos conditions");
          formData[3].setAttribute("data-error-visible", "true");
          validForm["birthdate"] = null;
        }
      }
      break;

    case "quantity":
      if(!isNaN(parseInt(e.srcElement.value))){
        validForm["tournament"] = parseInt(e.srcElement.value);
      } else {
        formData[4].setAttribute("data-error", "Ce n'est pas un nombre");
        formData[4].setAttribute("data-error-visible", "true");
        validForm["tournament"] = 0;
      }
      break;

    case "location":
       validForm["locate"] = e.target.defaultValue;
       break;

    default:
      break;
  }
}

function switchData(e){
  switch (e.srcElement.id) {
    case "checkbox1":
      validForm["condition"] = !validForm["condition"];
      break;

    case "checkbox2":
      validForm["newsletter"] = !validForm["newsletter"];
      break;  
  
    default:
      break;
  }
}

// erase error message
function eraseDataError(e){
  e.target.parentElement.removeAttribute("data-error");
  e.target.parentElement.removeAttribute("data-error-visible");
}


//verificaiton and validation form
submit.addEventListener("click", function(e){
  e.preventDefault();

  if (validForm['firstname'] != null && validForm['lastname'] != null && validForm['email'] != null && validForm['birthdate'] != null && validForm['condition']) {
    modal.innerHTML = "";
  } else {
    e.target.parentElement.setAttribute("data-error", "Des informations sont manquantes")
    e.target.parentElement.setAttribute("data-error-visible", "true");
  }
});