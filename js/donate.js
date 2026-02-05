// donate.js - Donate form validation and submission
// Handles donation form functionality

// Initialize donate form functionality
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'donate') {
        initDonateForm();
    }
});

// Donate form functionality
function initDonateForm() {
    const form = document.getElementById('donateForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateDonateForm(this)) {
            handleDonateSubmit(this);
        }
    });
}

// Validate donate form
function validateDonateForm(form) {
    const itemName = form.querySelector('#itemName').value.trim();
    const category = form.querySelector('#category').value;
    const location = form.querySelector('#location').value;
    const description = form.querySelector('#description').value.trim();
    
    if (!itemName) {
        showAlert('Please enter an item name', 'error');
        return false;
    }
    
    if (!category) {
        showAlert('Please select a category', 'error');
        return false;
    }
    
    if (!location) {
        showAlert('Please select a location', 'error');
        return false;
    }
    
    if (!description) {
        showAlert('Please enter a description', 'error');
        return false;
    }
    
    return true;
}

// Handle donate form submission
function handleDonateSubmit(form) {
    const formData = new FormData(form);
    const itemName = formData.get('itemName');
    
    // Simulate form submission
    showAlert(`Thank you! Your donation "${itemName}" has been submitted successfully.`, 'success');
    
    // Reset form
    form.reset();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}