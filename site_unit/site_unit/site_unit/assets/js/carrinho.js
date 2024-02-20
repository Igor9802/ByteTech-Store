function addToCart(productName, price) {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const row = document.createElement("tr");


    if (productName == "NOME") {

    } else if (productName == "") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Placa de Vídeo RX 6750 XT MECH 2X 12G V1 Radeon") {
        img = "https://images.kabum.com.br/produtos/fotos/475438/placa-de-video-rx-6750-xt-mech-2x-12g-v1-radeon-12gb-gddr6-freesync-dual-fan_1689965385_gg.jpg";
    } else if (productName == "Teclado Mecânico Gamer Redragon Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else if (productName == "Kumara") {
        img = "https://images.kabum.com.br/produtos/fotos/102433/teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_teclado-mecanico-gamer-hyperx-alloy-origins-hx-kb6rdx-br_1569421286_gg.jpg";
    } else {
        img = "";
    }

    row.innerHTML = `
    <td>
                <img src="${img}">
                Produto 1
            </td>
        <td>${productName}</td>
        <td>R$ ${price.toFixed(2)}</td>
        <td>
            <button class="btn btn-primary btn-sm" onclick="incrementQuantity(this, ${price})">+</button>
            <span class="mx-2">1</span>
            <button class="btn btn-primary btn-sm" onclick="decrementQuantity(this, ${price})">-</button>
        </td>
        <td>R$ ${price.toFixed(2)}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(this, ${price})">Remover</button>
        </td>
    `;

    cartItems.appendChild(row);

   
    updateTotal(price);

    
    saveCartToStorage();
}

       
        function removeFromCart(button, price) {
            const cartItems = document.getElementById("cart-items");
            const cartTotal = document.getElementById("cart-total");

            const row = button.parentElement.parentElement;
            cartItems.removeChild(row);

            
            updateTotal(-price);

           
            saveCartToStorage();
        }

        
        function incrementQuantity(button, price) {
            const cartTotal = document.getElementById("cart-total");

            const row = button.parentElement.parentElement;
            const quantityElement = row.querySelector("span");
            const currentQuantity = parseInt(quantityElement.textContent);
            const currentTotal = parseFloat(row.children[3].textContent.replace("R$ ", ""));

            quantityElement.textContent = currentQuantity + 1;
            row.children[3].textContent = `R$ ${(currentTotal + price).toFixed(2)}`;

            updateTotal(price);

           
            saveCartToStorage();
        }

      
        function decrementQuantity(button, price) {
            const cartTotal = document.getElementById("cart-total");

            const row = button.parentElement.parentElement;
            const quantityElement = row.querySelector("span");
            const currentQuantity = parseInt(quantityElement.textContent);
            const currentTotal = parseFloat(row.children[3].textContent.replace("R$ ", ""));

            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                row.children[3].textContent = `R$ ${(currentTotal - price).toFixed(2)}`;

               
                updateTotal(-price);

           
                saveCartToStorage();
            }
        }

      
        function updateTotal(priceChange) {
            const cartTotal = document.getElementById("cart-total");
            const currentTotal = parseFloat(cartTotal.textContent.replace("R$ ", ""));
            const newTotal = currentTotal + priceChange;
            cartTotal.textContent = `R$ ${newTotal.toFixed(2)}`;
        }

       
        function saveCartToStorage() {
            const cartItems = document.getElementById("cart-items").innerHTML;
            const cartTotal = document.getElementById("cart-total").textContent;
            localStorage.setItem("cartItems", cartItems);
            localStorage.setItem("cartTotal", cartTotal);
        }

       
        function loadCartFromStorage() {
            const cartItems = localStorage.getItem("cartItems");
            const cartTotal = localStorage.getItem("cartTotal");
            if (cartItems && cartTotal) {
                document.getElementById("cart-items").innerHTML = cartItems;
                document.getElementById("cart-total").textContent = cartTotal;
            }
        }

        
        loadCartFromStorage();
       