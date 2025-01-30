function validateEmailAndPhoneNumber() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = document.getElementById('emailId');
    const emailValue = emailInput.value;
    const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneInput = document.getElementById('phoneNumber');
    const phoneValue =phoneInput.value ;
    
    // Perform validation
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        return false ; // Prevent form submission
    }
    else if(!phoneNum.test(phoneValue)){
        alert('Please enter a valid number.');
        return ; // Prevent form submission
    }
    window.open("phonenumberotp.html")
  }
  
function BackToLogin() {
  window.open("login.html");
}