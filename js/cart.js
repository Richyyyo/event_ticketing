/*

document.addEventListener('DOMContentLoaded',() => {
    const addToCartButton = document.querySelectorAll('.addToCartButton');
    addToCartButton.forEach(button => {
    button.addEventListener("click", event => {
        const eventBox = event.target.closest(".grid");
        if(eventBox) {
            addToCart(eventBox);
        } else { 
            console.log('No event box found');
        }
        
    });
});
    const cartContent = document.querySelector('.cart-content');
    const addToCart = eventBox => {
    const eventImgSrc = eventBox.querySelector('img').src;
    const eventTitle = eventBox.querySelector('#eventName').textContent;
    const eventPrice = eventBox.querySelector('#eventPrice').textContent;

    const cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');
    cartBox.innerHTML =  `
        <img src="${eventImgSrc}" alt="" class="cart-img">
        <div class="cart-detail">
            <h3 class="cart-event-title">${eventTitle}</h3>
            <span class="cart-price">${eventPrice}</span>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="fa-solid fa-trash"></i>
    `;

    cartContent.appendChild(cartBox);
}

}); */

// cart.js
// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartContent = document.querySelector('.cart-content');
    const cartTotalPrice = document.querySelector('#cartTotalPrice');

    if (!cartContent) {
        console.error('Cart content element not found. Please ensure you have an element with class "cart-content" in your HTML');
        return;
    }

    if (!cartTotalPrice) {
        console.error('Cart total price element not found. Please ensure you have an element with id "cartTotalPrice" in your HTML');
        return;
    }

    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Populate cart content
    cart.forEach((item, index) => {
        const cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');
        cartBox.innerHTML = `
            <img src="${item.imgSrc}" alt="" class="cart-img">
            <div class="cart-detail">
                <h3 class="cart-event-title">${item.title}</h3>
                <span class="cart-price">${item.price}</span>
                <div class="cart-quantity">
                    <button class="decrement">-</button>
                    <span class="number">${item.quantity}</span>
                    <button class="increment">+</button>
                </div>
            </div>
            <i class="fa-solid fa-trash"></i>
        `;
        cartContent.appendChild(cartBox);

        // Add event listeners for quantity buttons and trash
        const decrementBtn = cartBox.querySelector('.decrement');
        const incrementBtn = cartBox.querySelector('.increment');
        const trashBtn = cartBox.querySelector('.fa-trash');
        const quantitySpan = cartBox.querySelector('.number');

        decrementBtn.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantitySpan.textContent = item.quantity;
                updateCartAndTotal();
            }
        });

        incrementBtn.addEventListener('click', () => {
            item.quantity++;
            quantitySpan.textContent = item.quantity;
            updateCartAndTotal();
        });

        trashBtn.addEventListener('click', () => {
            cart.splice(index, 1); // Remove item from cart array
            cartBox.remove(); // Remove from DOM
            updateCartAndTotal();
        });
    });

    // Update cart in localStorage and recalculate total
    const updateCartAndTotal = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        calculateTotal();
    };

    // Calculate total with tax
    const calculateTotal = () => {
        let subtotal = 0;

        cart.forEach(item => {
            const price = parseFloat(item.price.replace('$', ''));
            const quantity = item.quantity;
            subtotal += price * quantity;
        });

        const taxRate = 0.08; // 8% tax, adjust as needed
        const tax = subtotal * taxRate;
        const total = subtotal + tax;

        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    };

    // Initial calculation
    calculateTotal();
});


document.getElementById('cancel').addEventListener('click', () => {
    console.log('Hello');
    document.querySelector('.cart-content').innerHTML ='';
    document.querySelector('#cartTotalPrice').textContent = '$0.00';
    localStorage.clear();
})
/*
const cartContent = document.querySelector('.cart-content');
const addToCart = eventBox => {
    const eventImgSrc = eventBox.querySelector('img').src;
    const eventTitle = eventBox.querySelector('#eventName').textContent;
    const eventPrice = eventBox.querySelector('#eventPrice').textContent;

    const cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');
    cartBox.innerHTML =  `
        <img src="${eventImgSrc}" alt="" class="cart-img">
        <div class="cart-detail">
            <h3 class="cart-event-title">${eventTitle}</h3>
            <span class="cart-price">${eventPrice}</span>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="fa-solid fa-trash"></i>
    `;

    cartContent.appendChild(cartBox);
}

/*
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelectorAll('#addToCartButton');
    addToCartButton.forEach(function(button) {
        button.addEventListener('click', function(){
            const container = button.parentElement;
            const eventNameElement = container.querySelector('#eventName');
            const eventPriceElement = container.querySelector('#eventPrice');
            const eventName = eventNameElement.textContent;
            const eventPrice = eventPriceElement.textContent;
            console.log(eventName);
            console.log(eventPrice);

            const cartContainer = document.getElementById('cart');
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.textContent = `${eventName} - ${eventPrice}`;

        })


        
    })

});

document.addEventListener('DOMContentLoaded', function() {
    
            
});         
/* const cart = [];
const taxRate = 0.05;

function addToCart (name, price) {
    cart.push({name, price});
    displayItems();
}

function displayItems() {
    const itemsContainer = document.get
}*/

/*

    const taxRate = 0.05;
    let cartTotal = 0;

    const addToCartButton = document.getElementById('addToCartButton');
    const cartElement = document.getElementById('cart');
    const cartTotalElement = document.getElementById('cartTotal');
    const emptyCartMessageElement = document.getElementById('emptyCartMessage');

    if(addToCartButton && cartElement && cartTotalElement && emptyCartMessageElement) {
        addToCartButton.addEventListener('click', function() {
            console.log('added');
            const eventName = document.getElementById('eventName').innerText;
            const eventPriceText = document.getElementById('eventPrice').innerText;
            const eventPrice = parseFloat(eventPriceText.replace('$', ''));
        
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `<p>${eventName} - ${eventPrice}</p>`;
            
            cartElement.appendChild(cartItem);
        
            cartTotal += eventPrice;
            updateCartTotal();
            checkCartEmpty();
        });
        
        
        const checkoutButtons = document.getElementsByClassName('checkout');
            for(let i = 0; i < checkoutButtons.length; i++) {
                checkoutButtons[i].addEventListener('click', function() {
                    console.log('added');
                const totalWithTax = cartTotal + (cartTotal * taxRate);
        
        });

        function updateCartTotal() {
            document.getElementById('cartTotal').innerText = `Total: $${cartTotal.toFixed(2)}`;
        }
        
        function checkCartEmpty() {
            if(cartTotal === 0) {
                emptyCartMessage.style.display = 'block';
            } else {
                emptyCartMessage.style.display = 'none';
            }
            
        }
        
        checkCartEmpty();
    };
    
    }
 });
 */
//    document.getElementById('addToCartButton').addEventListener('click', function() {
//       const eventName = document.getElementById('eventName').innerText;
//        const eventPriceText = document.getElementById('eventPrice').innerText;
//       const eventPrice = parseFloat(eventPriceText.replace('$', ''));
    
 //       const cartItem = document.createElement('div');
 //       cartItem.className = 'cart-item';
 //       cartItem.innerHTML = `<p>${eventName} - ${eventPrice}</p>`;
        
  //      document.getElementById('cart').appendChild(cartItem);
    
 //       cartTotal += eventPrice;
  //      updateCartTotal();
 //       checkCartEmpty();
 //   });
    
    
//    const checkoutButtons = document.getElementsByClassName('checkout');
//        for(let i = 0; i < checkoutButtons.length; i++) {
 //           checkoutButtons[i].addEventListener('click', function() {
 //           const totalWithTax = cartTotal + (cartTotal * taxRate);
    
//    });
//}
    
 //   function updateCartTotal() {
 //       document.getElementById('cartTotal').innerText = `Total: $${cartTotal.toFixed(2)}`;
 //   }
    
 //   function checkCartEmpty() {
 //       if(cartTotal === 0) {
 //           emptyCartMessage.style.display = 'block';
 //       } else {
  //          emptyCartMessage.style.display = 'none';
 //       }
        
 //   }
    
 //   checkCartEmpty();
//})