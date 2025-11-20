// ============================================
// ASSIGNMENT 8: JavaScript Interactivity
// ============================================

// DOM QUERY #1: Get the toggle button and expanded content
const toggleBtn = document.getElementById('toggleBtn');
const expandedContent = document.getElementById('expandedContent');

// DOM QUERY #2: Get the day message element
const dayMessage = document.getElementById('dayMessage');

// ============================================
// EVENT FUNCTION #1: Updates page content
// ============================================
toggleBtn.addEventListener('click', function() {
    expandedContent.classList.toggle('hidden');
    
    // Update button text based on state
    if (expandedContent.classList.contains('hidden')) {
        toggleBtn.textContent = 'Show More';
    } else {
        toggleBtn.textContent = 'Show Less';
    }
});

// ============================================
// EVENT FUNCTION #2: Changes CSS properties
// ============================================
const cards = document.querySelectorAll('.overview-card');
cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0';
        this.style.borderLeftColor = '#ff6b6b';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.borderLeftColor = '';
    });
});

// ============================================
// DAY OF THE WEEK FEATURE
// ============================================
function applyDayOfWeekStyles() {
    // Use JavaScript Date object to detect current day
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = dayNames[dayOfWeek];
    
    // Decision structure: if/else if for 7 unique variations
    if (dayOfWeek === 0) { // Sunday
        dayMessage.textContent = '🌙 A Literary Analysis by [Woochan] - Sunday: A day for reflection on institutional power.';
        dayMessage.style.color = '#6f42c1';
        dayMessage.style.fontSize = '1.1rem';
        dayMessage.style.fontWeight = 'bold';
    } 
    else if (dayOfWeek === 1) { // Monday
        dayMessage.textContent = '📚 A Literary Analysis by [Woochan] - Monday: Begin the week understanding Jon\'s struggle.';
        dayMessage.style.color = '#007bff';
        dayMessage.style.fontSize = '1.05rem';
    } 
    else if (dayOfWeek === 2) { // Tuesday
        dayMessage.textContent = '🦁 A Literary Analysis by [Woochan] - Tuesday: Witness Jon\'s transformation from lion to bunny.';
        dayMessage.style.color = '#fd7e14';
        dayMessage.style.fontSize = '1.05rem';
    } 
    else if (dayOfWeek === 3) { // Wednesday
        dayMessage.textContent = '💰 A Literary Analysis by [Woochan] - Wednesday: Explore how consumerism shapes identity.';
        dayMessage.style.color = '#28a745';
        dayMessage.style.fontSize = '1.05rem';
    } 
    else if (dayOfWeek === 4) { // Thursday
        dayMessage.textContent = '🏢 A Literary Analysis by [Woochan] - Thursday: Institutional control at its core.';
        dayMessage.style.color = '#dc3545';
        dayMessage.style.fontSize = '1.05rem';
    } 
    else if (dayOfWeek === 5) { // Friday
        dayMessage.textContent = '✨ A Literary Analysis by [Woochan] - Friday: Celebrate authentic humanity and resistance.';
        dayMessage.style.color = '#e83e8c';
        dayMessage.style.fontSize = '1.1rem';
        dayMessage.style.fontWeight = 'bold';
    } 
    else if (dayOfWeek === 6) { // Saturday
        dayMessage.textContent = '🎯 A Literary Analysis by [Woochan] - Saturday: Deep dive into Saunders\' satirical critique.';
        dayMessage.style.color = '#17a2b8';
        dayMessage.style.fontSize = '1.1rem';
        dayMessage.style.fontWeight = 'bold';
    }
}

// Call the day of week function on page load
applyDayOfWeekStyles();

// ============================================
// EXTRA CREDIT: Responsive Navigation Bar
// ============================================
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Track menu state
let isMenuOpen = false;

// Toggle menu on click
menuToggle.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mainNav.classList.remove('collapsed');
        mainNav.classList.add('expanded');
    } else {
        mainNav.classList.remove('expanded');
        mainNav.classList.add('collapsed');
    }
});

// Close menu when a link is clicked
const navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        isMenuOpen = false;
        mainNav.classList.remove('expanded');
        mainNav.classList.add('collapsed');
    });
});

// Handle window resize - show menu on larger screens
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        mainNav.classList.remove('collapsed', 'expanded');
        isMenuOpen = false;
    }
});