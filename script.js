// Shopping Cart Functionality
let cart = [];

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        const product = {
            id: Date.now(),
            name: productName,
            price: productPrice
        };
        
        cart.push(product);
        showNotification(`${productName} added to cart!`);
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cart.length > 0) {
        cartIcon.textContent = `🛍️ Cart (${cart.length})`;
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #d4af37;
        color: #1a1a1a;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Thank you! We will get back to you soon.');
    this.reset();
});

// CTA Button Click
document.querySelector('.cta-button')?.addEventListener('click', function() {
    const collectionSection = document.querySelector('#collection');
    collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Page Load Animation
window.addEventListener('load', function() {
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animation = `slideIn 0.5s ease ${index * 0.1}s both`;
    });
});

console.log('Zask Boutique - Welcome to luxury shopping!');
