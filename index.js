document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element
    var contactButton = document.getElementById("contact-button");

    // Add a click event listener to the button
    contactButton.addEventListener("click", function () {
        // Get the target element by its ID
        var contactDiv = document.getElementById("contact");
        // Scroll to the target element smoothly
        contactDiv.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element
    var aboutButton = document.getElementById("about-button");

    // Add a click event listener to the button
    aboutButton.addEventListener("click", function () {
        // Get the target element by its ID
        var aboutDiv = document.getElementById("about");

        // Scroll to the target element smoothly
        aboutDiv.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element
    var projectsButton = document.getElementById("projects-button");

    // Add a click event listener to the button
    projectsButton.addEventListener("click", function () {
        // Get the target element by its ID
        var prDiv = document.getElementById("spacerPr");

        // Scroll to the target element smoothly
        prDiv.scrollIntoView({ behavior: "smooth" });
    });
});