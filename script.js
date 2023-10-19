let passwordToggleIcon = document.getElementById("passwordToggleIcon");

passwordToggleIcon.addEventListener("click", togglePassword);

function togglePassword() {
    let passwordInput = document.getElementById("passwordInput"); 
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
};