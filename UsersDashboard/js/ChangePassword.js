function validatePassword() {
    // Minimum length requirement
    const minLength = 8;
    const passwordInput = document.getElementById('newPassword')
    const password = passwordInput.value
    const confirmPasswordinput = document.getElementById('confirmPassword')
    const confirmPassword = confirmPasswordinput.value
    // Check if password meets all criteria
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(password);
    const hasPasswordIsEqualToConformPassWord = (confirmPassword===password)

    if (password.length < minLength) {
        alert ("Password must be at least 8 characters long.");
        return
    }
    if (!hasUppercase) {
        alert( "Password must include at least one uppercase letter.");
        return
    }
    if (!hasLowercase) {
        alert("Password must include at least one lowercase letter.") ;
        return
    }
    if (!hasDigit) {
        alert("Password must include at least one number.");
        return
    }
    if (!hasSpecialChar) {
        alert( "Password must include at least one special character.");
        return
    }
    if(!hasPasswordIsEqualToConformPassWord){
        alert( "PassWord Not Matched With ConfirmPassWord");
        return   
    }
    window.open("login.html")
}
function BackToLogin(){
    window.open("login.html")
}