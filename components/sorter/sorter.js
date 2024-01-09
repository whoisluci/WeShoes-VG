function renderSorterList () {
    let rightTop = document.querySelector("#rightTop");
    let sortingContainer = document.createElement("div");
    sortingContainer.classList.add("sortByContainer");
    rightTop.append(sortingContainer);

    sortingContainer.innerHTML = `
    <p><b>SORT BY: </b></p>
    <select id="sort_by">
        <option value="lowestPrice">PRICE: LOW TO HIGH PRICE</option>
        <option value="highestPrice">PRICE: HIGH TO LOW PRICE</option>
        <option value="alphabeticalOrder">COUNTRY OF PRODUCTION: A TO Z</option>
        <option value="reverseOrder">COUNTRY OF PRODUCTION: Z TO A</option>
    </select>
    `; 
}


