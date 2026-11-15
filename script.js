alert("Welcome to Abdi Web Studio!");
function contactMessage() {
  alert("Thank you for choosing Abdi Web Studio!");
}
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Thank you! Your message has been received.");

  contactForm.reset();
});
