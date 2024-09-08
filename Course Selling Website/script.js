// JavaScript for handling contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple alert for demo purposes
    alert(`Thank you, ${name}! Your message has been received.\nWe will get back to you at ${email}.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});
