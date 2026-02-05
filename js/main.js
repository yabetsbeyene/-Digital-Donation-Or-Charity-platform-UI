// main.js - Common JavaScript utilities for HelpEthiopia
// Shared functions: navigation, alerts, email validation, page detection

// Sample data for demonstration (shared across pages)
const sampleItems = [
    {
        id: 1,
        type: 'donation',
        title: 'Winter Clothes',
        category: 'Clothing',
        location: 'Addis Ababa',
        description: 'Warm winter jackets ',
        image: 'images/jacket.jpg'
    },
    {
        id: 2,
        type: 'request',
        title: 'School Books',
        category: 'Education',
        location: 'Hawassa',
        description: 'Mathematics and Science textbooks needed for Grade 9 students',
        image: 'images/extrem book.jpg'
    },
    {
        id: 3,
        type: 'donation',
        title: 'Food Packages',
        category: 'Food',
        location: 'Gondar',
        description: 'Canned food and rice packages for families in need',
        image: 'images/food packed.png'
    },
    {
        id: 4,
        type: 'request',
        title: 'Medical Supplies',
        category: 'Healthcare',
        location: 'Bahir Dar',
        description: 'First aid kits and basic medical supplies for clinic',
        image: 'images/first-aid-1.jpg'
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation for all pages
    initNavigation();
});

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index';
}

// Navigation functionality (shared across all pages)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = getCurrentPage();
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Utility function for email validation (shared)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show alert message (shared across all pages)
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button class="alert-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Insert at top of page
    document.body.insertBefore(alert, document.body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Smooth scrolling for anchor links (shared)
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});