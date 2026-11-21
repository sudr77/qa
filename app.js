let cart = [];

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorEl = document.getElementById("error-message");

    if (user === "standard_user" && pass === "secret_sauce") {
        errorEl.classList.add("hidden");
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("inventory-container").classList.remove("hidden");
    } else if (user === "locked_out_user") {
        errorEl.textContent = "Hata: Bu kullanıcı hesabı kilitlenmiştir.";
        errorEl.classList.remove("hidden");
    } else {
        errorEl.textContent = "Hata: Kullanıcı adı veya şifre hatalı!";
        errorEl.classList.remove("hidden");
    }
}

function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cart-count").textContent = cart.length;
}

function showCheckout() {
    document.getElementById("inventory-container").classList.add("hidden");
    document.getElementById("checkout-container").classList.remove("hidden");
    
    const list = document.getElementById("cart-items");
    list.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} TL`;
        list.appendChild(li);
        total += item.price;
    });
    document.getElementById("total-price").textContent = total;
}

function completeOrder() {
    const customer = document.getElementById("customer-name").value;
    const statusEl = document.getElementById("order-status");
    
    if (!customer || cart.length === 0) {
        alert("Lütfen adınızı girin ve sepete ürün ekleyin!");
        return;
    }
    statusEl.textContent = `Teşekkürler ${customer}, siparişiniz alındı!`;
    statusEl.classList.remove("hidden");
    cart = [];
    document.getElementById("cart-count").textContent = "0";
}

function backToShop() {
    document.getElementById("checkout-container").classList.add("hidden");
    document.getElementById("order-status").classList.add("hidden");
    document.getElementById("inventory-container").classList.remove("hidden");
}

function logout() {
    cart = [];
    document.getElementById("cart-count").textContent = "0";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("inventory-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}
