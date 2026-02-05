// request.js - Request form validation and submission
// Handles request form functionality

// Initialize request form functionality
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'request') {
        initRequestForm();
    }
});

// Request form functionality
function initRequestForm() {
    const form = document.getElementById('requestForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateRequestForm(this)) {
            handleRequestSubmit(this);
        }
    });
}

// Validate request form
function validateRequestForm(form) {
    const itemName = form.querySelector('#itemName').value.trim();
    const category = form.querySelector('#category').value;
    const location = form.querySelector('#location').value;
    const urgency = form.querySelector('#urgency').value;
    const description = form.querySelector('#description').value.trim();
    
    if (!itemName) {
        showAlert('Please enter what you need', 'error');
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
    
    if (!urgency) {
        showAlert('Please select urgency level', 'error');
        return false;
    }
    
    if (!description) {
        showAlert('Please enter a description', 'error');
        return false;
    }
    
    return true;
}

// Handle request form submission
function handleRequestSubmit(form) {
    const formData = new FormData(form);
    const itemName = formData.get('itemName');
    
    // Simulate form submission
    showAlert(`Thank you! Your request for "${itemName}" has been submitted successfully.`, 'success');
    
    // Reset form
    form.reset();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}