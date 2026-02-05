// contact.js - Contact form validation and submission
// Handles contact form functionality

// Initialize contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'contact') {
        initContactForm();
    }
});

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm(this)) {
            handleContactSubmit(this);
        }
    });
}

// Validate contact form
function validateContactForm(form) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name) {
        showAlert('Please enter your name', 'error');
        return false;
    }
    
    if (!email) {
        showAlert('Please enter your email', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return false;
    }
    
    if (!message) {
        showAlert('Please enter your message', 'error');
        return false;
    }
    
    return true;
}

// Handle contact form submission
function handleContactSubmit(form) {
    const formData = new FormData(form);
    const name = formData.get('name');
    
    // Simulate form submission
    showAlert(`Thank you ${name}! Your message has been sent successfully. We'll get back to you soon.`, 'success');
    
    // Reset form
    form.reset();
}