// events.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');

    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const eventBox = event.target.closest(".grid");
            if (eventBox) {
                addToCart(eventBox);
            } else {
                console.log('No event box found');
            }
        });
    });

    const addToCart = eventBox => {
        const eventImgSrc = eventBox.querySelector('img').src;
        const eventTitle = eventBox.querySelector('#eventName').textContent;
        const eventPriceFull = eventBox.querySelector('#eventPrice').textContent; // "Price: $30"
        const eventPrice = eventPriceFull.split('Price: ')[1].trim(); // "$30"

        // Load existing cart from localStorage or initialize empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Add new item to cart
        cart.push({ imgSrc: eventImgSrc, title: eventTitle, price: eventPrice, quantity: 1 });
        
        // Save back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        console.log(`Added ${eventTitle} to cart`);
    };
});