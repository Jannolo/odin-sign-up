// const submitButton = document.querySelector('button');

console.log(firstPwField);
console.log(secondPwField);


// submitButton.addEventListener('click', validatePassword(firstPwField, secondPwField));

function validatePassword() {
        if (document.getElementById('password').value != document.getElementById('password2').value) {
            alert("The passwords don't match");
        } else {
            console.log("Die sind gleich!");
        }
    };

