// =========================================
// LOGIN PAGE
// =========================================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Email Empty Check
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Password Check
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Extract username from email
    let username = email.split("@")[0];

    // Capitalize first letter
    username = username.charAt(0).toUpperCase() + username.slice(1);

    // Save
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    // Success
    alert("Login Successful!");

    // Redirect
    window.location.href = "index.html";

});