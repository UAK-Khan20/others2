// Get the navigation links
const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");

// Add event listeners for smooth scrolling
aboutLink.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

projectsLink.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

contactLink.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
