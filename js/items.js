// items.js - Items page specific JavaScript
// Handles item display, filtering, and interactions

// Initialize items page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'items') {
        initItemsPage();
    }
});

// Items page functionality
function initItemsPage() {
    loadAllItems();
    initItemFilters();
}

// Load all items with optional filtering
function loadAllItems(filter = 'all') {
    const container = document.getElementById('itemsContainer');
    if (!container) return;
    
    let filteredItems = sampleItems;
    
    if (filter !== 'all') {
        filteredItems = sampleItems.filter(item => 
            item.type === filter || item.category.toLowerCase() === filter.toLowerCase()
        );
    }
    
    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="no-items">
                <h3>No items found</h3>
                <p>Try adjusting your filter or check back later.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredItems.map(item => `
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
                <button class="btn btn-primary" onclick="contactAboutItem('${item.title}')">
                    ${item.type === 'donation' ? 'Request Item' : 'Offer Help'}
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize item filters
function initItemFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and load items
            const filter = this.getAttribute('data-filter');
            loadAllItems(filter);
        });
    });
}

// Contact about item
function contactAboutItem(itemTitle) {
    showAlert(`Thank you for your interest in "${itemTitle}"! In a real application, this would open a contact form or messaging system.`, 'info');
}