// Contact Form Submission
document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log("Name: " + name + ", Email: " + email + ", Message: " + message);
    // Add your contact form submission logic here
});

// Sign In Form Submission
document.getElementById("signin-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Email: " + email + ", Password: " + password);
    // Add your sign in form submission logic here
});