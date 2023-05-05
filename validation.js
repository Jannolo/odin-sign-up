// const submitButton = document.querySelector('button');

// submitButton.addEventListener('click', validatePassword(firstPwField, secondPwField));

function validatePassword() {
        if (document.getElementById('password').value != document.getElementById('password2').value) {
            document.querySelector(".error-password").textContent = "The passwords don't match";
        } else {
            document.querySelector(".error-password").textContent = "";
        }
    };


function validateEmail() {
    const emailInput = document.querySelector("#email");
    const emailErrorMessage = document.querySelector(".error-email");
    console.log("Yes");
    if (emailInput.validity.valueMissing) {
        emailErrorMessage.textContent = "Please enter an email.";
    } else if (emailInput.validity.typeMismatch) {
        
        emailErrorMessage.textContent = "Please enter a valid email.";
    } else {
        emailErrorMessage.textContent = "";
    }
}

function validatePhone() {
    const phoneInput = document.querySelector("#phone");
    const phoneErrorMessage = document.querySelector(".error-phone");
    console.log("Im here");
    if (phoneInput.validity.patternMismatch) {
        phoneErrorMessage.textContent = "Please enter a phone number with exactly 12 digits!";
    } else {
        phoneErrorMessage.textContent = "";
    }
}

function validateFirst() {
    const firstInput = document.querySelector("#first");
    const firstErrorMessage = document.querySelector(".error-first");

    if(firstInput.validity.patternMismatch) {
        firstErrorMessage.textContent = "Please enter a valid first name.";
    } else {
        firstErrorMessage.textContent = "";
    }
}

function validateLast() {
    const lastInput = document.querySelector("#last");
    const lastErrorMessage = document.querySelector(".error-last");

    if(lastInput.validity.patternMismatch) {
        lastErrorMessage.textContent = "Please enter a valid last name.";
    } else {
        lastErrorMessage.textContent = "";
    }
}

const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", validateEmail);

const pwInput = document.querySelector("#password");
pwInput.addEventListener("input", validatePassword);
const pwInput2 = document.querySelector("#password2");
pwInput2.addEventListener("input", validatePassword);

const phoneInput = document.querySelector("#phone");
phoneInput.addEventListener("input", validatePhone);

const firstInput = document.querySelector("#first");
firstInput.addEventListener("input", validateFirst);

const lastInput = document.querySelector("#last");
lastInput.addEventListener("input", validateLast);
