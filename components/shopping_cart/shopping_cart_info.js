function renderShoesInCart (shoe, size) {
    let container = document.querySelector("#shoesInCart");
    let addedShoe = document.createElement("div");
    addedShoe.id = "shoeInCart";
    container.appendChild(addedShoe);
    addedShoe.innerHTML = `
    <div id="shoeImage"><img src="./images/skobilder/${shoe.file_name}"></div>
    <div id="shoeInfo">
        <div id="shoeName">${shoe.name}</div>
        <div id="shoeSize">${size}</div>
    </div>
    <div id="removeShoe"></div>
    <div id="shoePrice">
        <p>${shoe.price} sek</p> 
    </div>
    `;

    let removeShoeButton = addedShoe.querySelector("#removeShoe");
    removeShoeButton.addEventListener("click", function () {
        addedShoe.remove();
    })
}

function addToCart(shoe, size) {
    renderShoesInCart(shoe, size);
}
