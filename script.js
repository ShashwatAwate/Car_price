document.addEventListener("DOMContentLoaded", function () {
    const frontPage = document.querySelector(".front-page");
    const backgroundImage = document.querySelector(".background-image");
    const knowMoreContainer = document.querySelector(".know-more-container");
    const loginButtonContainer = document.querySelector(".login-button-container");
    const translucentSlide = document.getElementById("translucent-slide");
    const loginButton = document.getElementById("login-button");
    const cancelButton = document.getElementById("cancel-button");

    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const toLogin = document.getElementById("to-login");
    const toSignup = document.getElementById("to-signup");

    // Fade out front page after 2 seconds
    setTimeout(() => {
        frontPage.classList.add("fade-out");
        backgroundImage.classList.add("show");
        setTimeout(() => {
            frontPage.style.display = "none"; // Hide front page after fade-out
        }, 500); // Match this duration with the fade-out transition
    }, 2000);

    // Move the "know more" text after 2.5 seconds
    setTimeout(() => {
        knowMoreContainer.classList.add("shrink");
        loginButtonContainer.style.opacity = 1; // Show the login button
        loginButtonContainer.style.transition = 'opacity 1s ease-in-out'; // Smooth opacity transition
    }, 2500);

    // Show translucent slide on login button click
    loginButton.addEventListener("click", () => {
        translucentSlide.classList.add("show");
    });

    // Hide translucent slide on cancel button click
    cancelButton.addEventListener("click", () => {
        translucentSlide.classList.remove("show");
    });

    // Switch to login form
    toLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Switch to signup form
    toSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
});
