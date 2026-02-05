document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product1",
      price: 40,
    },
    {
      id: 2,
      name: "Product2",
      price: 90,
    },
    {
      id: 3,
      name: "Product3",
      price: 150,
    },
  ];
  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = ` 
    <span>${product.name} - $${product.price} </span>
    <button data-id="${product.id}"> Add to Cart </button>  `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productID);
      addToCart(product);
    }
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  function renderCart() {
    cartItems.innerText = "";
    let totalprice = 0;
    if (cart.length) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - ${item.price}`;
        cartItems.appendChild(cartItem);
        totalPrice.textContent = `$${totalprice}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
      totalPrice.textContent = `$0.00`;
    }
  }
  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("check out successfully");
    renderCart();
  });
});
