
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message based on the time
    const welcome = document.querySelector("h2");
    const hour = new Date().getHours();

    if (welcome) {
        if (hour < 12) {
            welcome.textContent = "Good morning! Welcome to my website";
        } else if (hour < 17) {
            welcome.textContent = "Good afternoon! Welcome to my website";
        } else {
            welcome.textContent = "Good evening! Welcome to my website";
        }
    }

    // Profile picture enlargement when clicked
    const picture = document.querySelector(".profile-picture");

    if (picture) {
        picture.style.cursor = "pointer";

        picture.addEventListener("click", function () {
            picture.classList.toggle("enlarged");
        });
    }

});
