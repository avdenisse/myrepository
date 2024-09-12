//Muestra un especifica seccion
function showSection(sectionId) {
    //Esconde todas las secciones
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Muestra la seleccion elegida
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// El carrito siempres sea array
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // actualiza carrito
    updateCartDisplay();
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // array
    let cartItems = document.getElementById('cartItems');
    let totalPrice = 0;

    cartItems.innerHTML = ''; // borra elementos existebtes

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong> - C$${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

// Rorrar un producto del carrito
function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let itemIndex = cart.findIndex(item => item.name === name);
    
    if (itemIndex !== -1) {
        // Disminuye por uno si solo hay uno la borra completamente
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1); // remover completamente si solo es uno
        }

        // actualiza el localstorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// borra todo
function clearCart() {
    localStorage.removeItem('cart'); // borra todo el carrito
    updateCartDisplay();
}
