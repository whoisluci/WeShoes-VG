"use strict";

function render_carousel (parent) {
    let carousel = document.createElement("div");
    carousel.id = "slideshow";
    parent.appendChild(carousel);
    
    carousel.innerHTML = `
    <div class="holder">
      <div class="slide-1"></div>
      <div class="slide-2"></div>
      <div class="slide-3"></div>
      <div class="slide-4"></div>
    </div>

    <div id="button-carousel">
        <div id="circle"></div>
    </div>

    <div class="buttons"> 
        <a href="#" id="prev" class="buttons"><</a>
        <a href="#" id="next" class="buttons">></a>
    </div>
    `;

    return {
        slide_1: document.querySelector(".slide-1"),
        slide_2: document.querySelector(".slide-2"),
        slide_3: document.querySelector(".slide-3"),
        slide_4: document.querySelector(".slide-4"),
        buttonCarousel: document.querySelector("#button-carousel")
    }
}
