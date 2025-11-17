// Select the contact form using its ID
const form = document.getElementById('contact-form');

// Add submit event listener to the form
form.addEventListener('submit', function(e) {

    // Prevent page from refreshing after form submit
    e.preventDefault();

    // Show success message to the user
    alert("Thank you! Your message has been sent.");

    // Clear all input fields after submission
    form.reset();
});
