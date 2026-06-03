console.log("LOTSO'S website loaded successfully.");

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting LOTSO'S. Your message has been received!");
        contactForm.reset();
    });
}