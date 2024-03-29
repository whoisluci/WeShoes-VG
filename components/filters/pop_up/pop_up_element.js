"use strict";

function renderPopUpElement(parent) {
    let shoeImg = document.querySelectorAll(".catalogue > div:first-child");
    //let main = document.querySelector("main");

    for (let shoe of shoeImg) {

        shoe.addEventListener("click", function renderPopUpFilter() {
            const overlay = document.createElement("div");
            overlay.classList.add("popupBackground");
            parent.appendChild(overlay);

            const container = document.createElement("div");
            container.id = "popupContainer";
            overlay.appendChild(container);


            let rewShoeName = arrayFind(SHOES, function (obj) {
                return obj.id == shoe.id;
            })

            let rewShoeCountry = arrayFind(COUNTRIES, function (obj) {
                return obj.id == rewShoeName.country_id;
            })

            let rewShoeKind = arrayFind(KINDS, function (obj) {
                return obj.id == rewShoeName.kind_id;
            })

            let averageScore = 0;

            container.innerHTML = `
                <div class="popup" id="popup">
                    <span class="close" id="closePopupBtn">&times;</span>
                    <div id="popUpItems">
                        <div id="boxTopLeft">
                            <div id="kinds">
                                <h1>${rewShoeName.name}</h1>
                                <p>${rewShoeCountry.name}</p>
                                <p>${rewShoeKind.name}</p>
                            </div>
                            <div id="sizes"></div>
                            <div id="reviews">
                            <p></p>
                            </div>
                        </div>
                        <div id="reviewsText">
                        </div>
                        <div id="boxTopRight">
                            <div id="image"></div>
                        </div>
                        <div id="boxBottomRight">
                            <div id="price">
                                <h3>${rewShoeName.price} sek</h3>
                                <button id="buy">BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            
            let shoesInInventory = arrayFilter(INVENTORY, function (obj) {
                return obj.shoe_id == shoe.id;
            })

            for (let shoe of shoesInInventory) {
                let container = document.createElement("div");
                document.querySelector("#sizes").append(container);
                container.classList.add("sizeType");
                container.innerHTML =`
                ${shoe.size}
                `;

                if (shoe.n_shoes == 0) {
                    container.classList.add("outOfStock");
                    container.remove();
                }

                        
                container.addEventListener("click", function (){
                    if (!container.classList.contains("selected")) {
                        // Remove "selected" class from all elements
                        document.querySelectorAll(".sizeType").forEach(function (el) {
                            el.classList.remove("selected");
                        });
                    container.classList.toggle("selected");
                    }
                });
            }
                
            let buyButton = document.querySelector("#buy");
            buyButton.addEventListener("click", function () {
                let selectedSizeEl = document.querySelector(".sizeType.selected");
                let selectedShoe = arrayFind(SHOES, function (obj) {
                    return shoe.id == obj.id
                });
                
                
                if (selectedSizeEl) {
                    let selectedSize = selectedSizeEl.textContent.trim();
                    addToCart(selectedShoe, selectedSize);
          
                } else {
                    alert("Please select a size before buying.");
                }
            });


            let shoeId = Number(shoe.getAttribute("id"));
            let reviewArray = arrayFilter(REVIEWS, function (product) {
                return product.shoe_id === shoeId
            });

            let revContainer = document.querySelector("#reviewsText");
            revContainer.innerHTML = ``;
            for (let review of reviewArray) {

                let reviewDiv = document.createElement("div");
                reviewDiv.classList.add("reviewDiv");
                revContainer.appendChild(reviewDiv);
                averageScore += review.score;

                reviewDiv.innerHTML = `
                            <h1 id="score">${review.score}/5</h1>
                            <p id="revText">${review.rev || "No review text."}</p>      
                        `;

                /*if (review.rev === "") {
                    let revText = document.querySelector("#revText");
                    revText.textContent = "No review text.";
                }*/
            }

            averageScore = Math.round(averageScore / reviewArray.length);
            document.querySelector("#reviews > p").textContent = `${averageScore}/5`;

            let image_box = document.querySelector("#image");
            image_box.style.backgroundImage = shoe.style.backgroundImage

            let closePopUpBtn = document.querySelector("#closePopupBtn")
            closePopUpBtn.addEventListener("click", function () {
                overlay.remove();
            });

            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) {
                    parent.removeChild(overlay);
                }
            });

        });
    }
}
