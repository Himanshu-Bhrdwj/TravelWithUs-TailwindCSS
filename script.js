const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu
hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    if (hamburger.innerHTML === "☰") {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }

});

// Close menu after clicking any link
const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");

        hamburger.innerHTML = "☰";

    });

});

// For the hero section(main section) background animation
const hero = document.getElementById("hero");

const images = [
    "images/bg.jpg",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    hero.style.backgroundImage = `url(${images[current]})`;

},4000);


// This below code for the about section
const aboutSection = document.getElementById("about");

let started = false;

function counter(id, target, speed) {

    let count = 0;

    const element = document.getElementById(id);

    const interval = setInterval(() => {

        count++;

        element.innerHTML = count + "+";

        if (count >= target) {
            clearInterval(interval);
        }

    }, speed);

}

window.addEventListener("scroll", () => {

    const sectionTop = aboutSection.offsetTop;

    if (window.scrollY >= sectionTop - 300 && !started) {

        started = true;

        counter("tourCount", 75, 15);

        counter("countryCount", 20, 50);

        counter("customerCount", 1500, 1);

    }

});




// Contact Form Validation

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Remove previous borders
    [name, email, number, subject, message].forEach(input => {
        input.classList.remove("border-red-500");
        input.classList.add("border-gray-500");
    });

    // Name Validation
    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        name.classList.add("border-red-500");
        return;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus();
        email.classList.add("border-red-500");
        return;
    }

    // Phone Validation
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(number.value.trim())) {
        alert("Please enter a valid 10-digit mobile number.");
        number.focus();
        number.classList.add("border-red-500");
        return;
    }

    // Subject Validation
    if (subject.value.trim() === "") {
        alert("Please enter the subject.");
        subject.focus();
        subject.classList.add("border-red-500");
        return;
    }

    // Message Validation
    if (message.value.trim().length < 10) {
        alert("Message should contain at least 10 characters.");
        message.focus();
        message.classList.add("border-red-500");
        return;
    }

    // Success
    alert("🎉 Thank you! Your suggestion has been submitted successfully.");

    // Clear Form
    name.value = "";
    email.value = "";
    number.value = "";
    subject.value = "";
    message.value = "";

});


// SHOW USER AFTER LOGIN

const loginButton = document.getElementById("loginButton");
const userGreeting = document.getElementById("userGreeting");

const username = localStorage.getItem("username");
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true" && username) {

    loginButton.classList.add("hidden");

    userGreeting.classList.remove("hidden");

    userGreeting.textContent = " " + username;

}

// LOGOUT

if (userGreeting) {

    userGreeting.addEventListener("click", function () {

        const logout = confirm("Do you want to logout?");

        if (logout) {

            localStorage.removeItem("username");
            localStorage.removeItem("isLoggedIn");

            location.reload();

        }

    });

}