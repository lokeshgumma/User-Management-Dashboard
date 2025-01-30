function goTopassworChangepage(){
    const otp = document.getElementById('enterOtp').value;
    if (otp.length !== 6 || isNaN(otp)) {
        alert('Please enter a valid 6-digit OTP.');
        return;
    }
    window.open('changepassword.html')
}
function backToLoginPage() {
  window.open("login.html");
}
