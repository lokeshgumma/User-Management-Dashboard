function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = document.getElementById('emailId');
    const emailValue = emailInput.value;

    // Perform validation
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }
window.open("UsersList.html")
    }