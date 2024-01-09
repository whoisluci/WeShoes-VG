function renderShoppingCartInfo () {
    let shoppingCart = document.querySelector("#shoppingCart");
    shoppingCart.innerHTML = `
    <h1>YOUR SHOPPING CART</h1>
    <div id="line" id="top"></div>
    <div id="shoesInCart"></div>
    <div id="line" id="middle"></div>
    <div id="totalPriceBox">
        <h2 id="totalPrice">TOTAL PRICE</h2>
        <p id="price">Price</p>
    </div>
    <div id="line" id="bottom"></div>
    <button id="checkoutButton">GO TO CHECKOUT</button>
    `;

    return {
        title: shoppingCart.querySelector("h1"),
        shoesInCart: shoppingCart.querySelector("#shoesInCart"),
        totalPriceBox: shoppingCart.querySelector("#totalPriceBox"),
        totalPrice: shoppingCart.querySelector("#totalPrice"),
        price: shoppingCart.querySelector("#price"),
        checkoutButton: shoppingCart.querySelector("#checkoutButton") 
    }
}