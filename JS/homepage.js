// homepage.js

function addToCart(productName, description, price, imageSrc) {
    const product = {
        name: productName,
        quantity: 1,
        price: price,
        total: price,
        image: imageSrc,
        description: description
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        const confirmed = confirm("Item already in Cart. Go to Cart?");
        if (confirmed) {
            window.location.href = '../HTML/Cart.html';
        }
    } else {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        const goToCartConfirmed = confirm("Go to Cart?");
        if (goToCartConfirmed) {
            window.location.href = '../HTML/Cart.html';
        }
    }
}

function goToCart() {
    window.location.href = '../HTML/Cart.html';
}

// Function to render cart items on the homepage
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = "Image Not Found";
        itemImage.classList.add('item-image');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemName = document.createElement('h3');
        itemName.innerText = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.innerText = `Price: ₹${item.price}`;

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.innerText = item.description;

        const itemQuantity = document.createElement('p');
        itemQuantity.classList.add('item-quantity');
        itemQuantity.innerText = `Quantity: ${item.quantity}`;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemQuantity);

        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemDetails);

        cartItemsContainer.appendChild(itemContainer);
    });
}

// Call the renderCartItems function to display the cart items on page load
renderCartItems();
