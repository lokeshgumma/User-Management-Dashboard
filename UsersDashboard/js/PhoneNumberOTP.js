function myFunction() {
    window.open("login.html");
  }
  function goToLoginPage(){
      const otp = document.getElementById('enterOtp').value;
      if (otp.length !== 6 || isNaN(otp)) {
          alert('Please enter a valid 6-digit OTP.');
          return;
      }
      window.open('blank.html')
  }