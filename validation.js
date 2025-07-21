const validation = document.getElementById('validation');
const nameField = document.getElementById('name');
const emailField = document.getElementById('emailid');
const passwordField = document.getElementById('password');
const confirmField = document.getElementById('confirmpassword');
const checkBox = document.getElementById('check');

const errorName = document.getElementById('errorname');
const errorEmail = document.getElementById('erroremail');
const errorPassword = document.getElementById('errorpassword');
const errorMessage = document.getElementById('error-message');


function validateFields() {
    let isValid = true;

 
    if (nameField.value.trim() === "") {
        errorName.textContent = "PLEASE ENTER YOUR NAME";
        nameField.classList.add('is-invalid');
        nameField.classList.remove('is-valid');
        isValid = false;
    } else {
        errorName.textContent = "";
        nameField.classList.remove('is-invalid');
        nameField.classList.add('is-valid');
    }

    if (emailField.value.trim() === "") {
        errorEmail.textContent = "PLEASE ENTER YOUR EMAIL";
        emailField.classList.add('is-invalid');
        emailField.classList.remove('is-valid');
        isValid = false;
    } else {
        errorEmail.textContent = "";
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
    }

    if (passwordField.value.trim() === "" || passwordField.value.length < 8) {
        errorPassword.textContent = "PLEASE ENTER A PASSWORD WITH AT LEAST 8 CHARACTERS";
        passwordField.classList.add('is-invalid');
        passwordField.classList.remove('is-valid');
        isValid = false;
    } else {
        errorPassword.textContent = "";
        passwordField.classList.remove('is-invalid');
        passwordField.classList.add('is-valid');
    }

  
    if (confirmField.value.trim() === "" || confirmField.value !== passwordField.value) {
        errorMessage.textContent = "PASSWORDS DO NOT MATCH";
        confirmField.classList.add('is-invalid');
        confirmField.classList.remove('is-valid');
        isValid = false;
    } else {
        errorMessage.textContent = "";
        confirmField.classList.remove('is-invalid');
        confirmField.classList.add('is-valid');
    }


    if (!checkBox.checked) {
        checkBox.classList.add('is-invalid');
        checkBox.classList.remove('is-valid');
        isValid = false;
    } else {
        checkBox.classList.remove('is-invalid');
        checkBox.classList.add('is-valid');
    }

    return isValid;
}


[nameField, emailField, passwordField, confirmField].forEach((input) => {
    input.addEventListener('input', validateFields);
});
checkBox.addEventListener('change', validateFields);


validation.addEventListener('submit', (event) => {
    event.preventDefault();

    const formValid = validateFields();

    if (formValid) {
        alert("Form is valid and ready to submit!");

        nameField.value = "";
        emailField.value = "";
        passwordField.value = "";
        confirmField.value = "";
        checkBox.checked = false;

  
        [nameField, emailField, passwordField, confirmField, checkBox].forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });

    
        [errorName, errorEmail, errorPassword, errorMessage].forEach(err => err.textContent = "");
    }
});
