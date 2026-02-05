// index.js - Homepage specific JavaScript
// Handles recent items display and newsletter form

// Initialize homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'index') {
        initHomePage();
    }
});

// Home page functionality
function initHomePage() {
    // Load recent items
    loadRecentItems();
    
    // Initialize newsletter form
    initNewsletterForm();
}

// Load recent items for homepage
function loadRecentItems() {
    const container = document.getElementById('recentItemsGrid');
    if (!container) return;
    
    const recentItems = sampleItems.slice(0, 3); // Show first 3 items
    
    container.innerHTML = recentItems.map(item => `
        <div class="item-card">
            <img src="${item.image}" alt="${item.title}" class="item-image">
            <div class="item-content">
                <span class="badge ${item.type === 'donation' ? 'badge-donation' : 'badge-request'}">
                    ${item.type === 'donation' ? 'Donation' : 'Request'}
                </span>
                <h3>${item.title}</h3>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Category:</strong> ${item.category}</p>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Newsletter form initialization
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const messageContainer = document.getElementById('newsletterMessage');

    if (!form || !emailInput || !messageContainer) {
        console.log('Newsletter form elements not found');
        return;
    }

    form.addEventListener('submit', function(e) {
        // Prevent form submission and page refresh
        e.preventDefault();
        
        const email = emailInput.value.trim();

        // Clear previous messages
        clearNewsletterMessage();

        // Validate email
        if (email === '') {
            showNewsletterMessage('❌ Please enter your email address', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNewsletterMessage('⚠️ Please enter a valid email address', 'error');
            return;
        }

        // Show success message
        showNewsletterMessage('✅ Thank you for subscribing! Welcome to our community.', 'success');
        
        // Clear the input field
        emailInput.value = '';
    });
}

// Show newsletter message
function showNewsletterMessage(text, type) {
    const messageContainer = document.getElementById('newsletterMessage');
    if (!messageContainer) return;

    messageContainer.textContent = text;
    messageContainer.className = `newsletter-message ${type}`;
    messageContainer.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            clearNewsletterMessage();
        }, 5000);
    }
}

// Clear newsletter message
function clearNewsletterMessage() {
    const messageContainer = document.getElementById('newsletterMessage');
    if (!messageContainer) return;

    messageContainer.textContent = '';
    messageContainer.className = 'newsletter-message';
    messageContainer.style.display = 'none';
}
