// ---------------- SUBSCRIBE ----------------
function subscribeAlert() {
  alert("Thank you for subscribing.");
}

// ---------------- CART LOGIC ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

function addToCart(bookName, price) {
  cart.push({ name: bookName, price: price });
  total += price;

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total.toFixed(2));

  updateCartDisplay();
  alert(bookName + " added to cart");
}

function clearCart() {
  cart = [];
  total = 0;

  localStorage.removeItem("cart");
  localStorage.removeItem("total");

  updateCartDisplay();
  alert("Cart cleared");
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartList || !cartTotal) return;

  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price.toFixed(2);
    cartList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

// ---------------- CONTACT FORM ----------------
function contactAlert() {
  const name = document.querySelector("input[type='text']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  alert("Thank you for your message.");
}
