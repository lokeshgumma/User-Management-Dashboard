document.getElementById('SendOtp').addEventListener('click',validateEmail)
        function validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const emailInput = document.getElementById('floatingInput');
            const emailValue = emailInput.value;
        
            // Perform validation
            if (!emailPattern.test(emailValue)) {
                alert('Please enter a valid email address.');
                return false; // Prevent form submission
            }
                window.open("OTPwithemaliid.html");
        }
            
    

        function BackToLogin() {
          window.open("login.html");
        }
        
        