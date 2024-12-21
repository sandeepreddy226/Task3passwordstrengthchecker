
let state = false;
let password = document.getElementById("password");
let lowUpperCase = document.querySelector(".low-upper-case");
let number = document.querySelector(".one-number");
let specialChar = document.querySelector(".one-special-char");
let eightChar = document.querySelector(".eight-character");

password.addEventListener("keyup", function() {
    let pass = document.getElementById("password").value;
    checkStrength(pass);
});

function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        state = false;
        document.getElementById("togglePassword").classList.remove("fa-eye-slash");
        document.getElementById("togglePassword").classList.add("fa-eye");
    } else {
        document.getElementById("password").setAttribute("type", "text");
        state = true;
        document.getElementById("togglePassword").classList.remove("fa-eye");
        document.getElementById("togglePassword").classList.add("fa-eye-slash");
    }
}

function checkStrength(password) {
    // Check for uppercase and lowercase letters
    if (password.match(/([a-z].[A-Z])|([A-Z].[a-z])/)) {
        lowUpperCase.classList.remove('invalid');
        lowUpperCase.classList.add('valid');
    } else {
        lowUpperCase.classList.add('invalid');
        lowUpperCase.classList.remove('valid');
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    // Check for special characters
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        specialChar.classList.remove('invalid');
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.add('invalid');
        specialChar.classList.remove('valid');
    }

    // Check for minimum length of 8 characters
    if (password.length > 7) {
        eightChar.classList.remove('invalid');
        eightChar.classList.add('valid');
    } else {
        eightChar.classList.add('invalid');
        eightChar.classList.remove('valid');
    }
}
