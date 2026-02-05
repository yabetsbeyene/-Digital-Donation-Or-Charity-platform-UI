// auth.js - Authentication forms (login & signup)
// Basic form validation for educational purposes only

// Initialize authentication forms
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = getCurrentPage();
    
    if (currentPage === 'login') {
        initLoginForm();
    } else if (currentPage === 'signup') {
        initSignupForm();
    }
});

// Login form functionality
function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateLoginForm(this)) {
            handleLoginSubmit(this);
        }
    });
}

// Validate login form
function validateLoginForm(form) {
    const email = form.querySelector('#loginEmail').value.trim();
    const password = form.querySelector('#loginPassword').value.trim();
    
    if (!email) {
        showAlert('Please enter your email address', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return false;
    }
    
    if (!password) {
        showAlert('Please enter your password', 'error');
        return false;
    }
    
    return true;
}

// Handle login form submission
function handleLoginSubmit(form) {
    // Simulate login process
    showAlert('Login successful! Welcome back to HelpEthiopia.', 'success');
    
    // Reset form
    form.reset();
    
    // Redirect to homepage after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Signup form functionality
function initSignupForm() {
    const form = document.getElementById('signupForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateSignupForm(this)) {
            handleSignupSubmit(this);
        }
    });
}

// Validate signup form
function validateSignupForm(form) {
    const fullName = form.querySelector('#fullName').value.trim();
    const email = form.querySelector('#email').value.trim();
    const password = form.querySelector('#password').value.trim();
    const confirmPassword = form.querySelector('#confirmPassword').value.trim();
    
    if (!fullName) {
        showAlert('Please enter your full name', 'error');
        return false;
    }
    
    if (!email) {
        showAlert('Please enter your email address', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return false;
    }
    
    if (!password) {
        showAlert('Please enter a password', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showAlert('Password must be at least 6 characters long', 'error');
        return false;
    }
    
    if (!confirmPassword) {
        showAlert('Please confirm your password', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return false;
    }
    
    return true;
}

// Handle signup form submission
function handleSignupSubmit(form) {
    const formData = new FormData(form);
    const fullName = formData.get('fullName');
    
    // Simulate account creation
    showAlert(`Welcome ${fullName}! Your account has been created successfully.`, 'success');
    
    // Reset form
    form.reset();
    
    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}