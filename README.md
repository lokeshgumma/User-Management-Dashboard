User Management Dashboard
==========================

**Project Overview**

This project is a simple User Management Dashboard that allows users to log in and view a list of users fetched from a mock backend API. The dashboard includes functionalities such as viewing, adding, editing, and deleting users, although due to API limitations, some operations are simulated with alerts.

**Features**
=============

**User Login Page:** Users can log in with any valid email ID and password.

**Form Validations:** Email input has validation to ensure proper format.

**Forgot Password Pages:** Placeholder pages (ForgotPassword.html, ForgotPassWordWithEmail.html, ForgotPaaswordwithSecurityQuestions.html, OTPwithemailid.html, PhoneNumberOTP.html) for password recovery are included for UI completeness, but they are not functional as no OTP generation is implemented.

**User List Page:** After successful login, users are redirected to the UsersList.html page.

**CRUD Operations:**
====================

**View:** Displays users dynamically fetched from a free API.

**Add/Edit/Delete:** These actions are simulated using alerts as the API does not support persistent data changes.

**Pagination:** Implemented below the user table to manage overflow of users.

**UI Enhancements**:
====================

Used Bootstrap classes and libraries for a clean UI.

Implemented a responsive layout with a footer, header, and side navigation bar.

Added a "Back to Top" arrow for easy navigation.

**Logout Option:** Users can log out from the dashboard.

**Technologies Used**

**Frontend:** HTML, CSS, JavaScript, Bootstrap

**API:** JSONPlaceholder (Free REST API for testing)

**Libraries:** Bootstrap, Fetch API

**Project Structure**
======================

index.html - Main entry page

login.html - User login page

signup.html - User signup page

UsersList.html - Displays the list of users

AddNewUser.html - Page to add a new user

EditUser.html - Page to edit user details

ViewUser.html - Displays user details

ForgotPassWord.html - Placeholder for password recovery

ForgotPassWordWithEmail.html - Placeholder for email-based password recovery

ForgotPaaswordwithSecurityQuestions.html - Placeholder for security question-based recovery

OTPwithemailid.html - Placeholder for email OTP verification

PhoneNumberOTP.html - Placeholder for phone number OTP verification

changepassword.html - Page for updating the user’s password

scss/ - SCSS styles

js/main.js - Main JavaScript logic

LICENSE.txt - Project license

bootstrap-admin-template-free.jpg - Admin template image

**Setup & Installation**
========================

**Prerequisites**

A web browser (Chrome, Firefox, Edge, etc.)

Git installed (if cloning the repository)

Steps to Run the Project

**Clone the repository:**

1.git clone [Your GitHub Repository URL]

2.Navigate to the project directory:

cd user-management-dashboard

Open the index.html file in a browser or use Live Server in VS Code.

Login with any valid email ID and any password.

Explore the User Management functionalities.

**Challenges Faced**

**API Limitations:** JSONPlaceholder does not support actual data modifications (POST, PUT, DELETE). This required implementing alerts to simulate these actions.

**Deployment Issues:** Faced difficulties deploying due to API request handling, which was resolved through debugging and configuring CORS policies correctly.

**Pagination Handling:** Implementing pagination dynamically while fetching API data required managing state correctly.

**UI Design:** Ensuring responsiveness and a clean user experience using Bootstrap required adjustments and testing across different screen sizes.

**Future Improvements**

Implement a real backend API to allow actual user creation, modification, and deletion.

Improve authentication by adding proper session management.

Implement a working forgot password feature with OTP verification.

Enhance UI with animations and better user experience elements.

**Deployment Link**

[https://user-management-dashboard-nine-red.vercel.app/UsersDashboard/login.html ]

**Author**
=========

Developed by Lokesh

Thank you for checking out this project! Feel free to raise issues or contribute improvements.
