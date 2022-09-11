'use strict';

function filterBySearchInput() {
    let input = document.getElementById('search-form-input');
    let filter = input.value.toUpperCase();
    let gridView = document.getElementById("items-grid-view");
    let elementsList = gridView.getElementsByTagName('div');
    let selectedSearchItem = document.querySelector('.textBox').value;
    let elementsClassName = selectedSearchItem === 'Name' ? "card-name" :
        selectedSearchItem === 'Description' ? "card-description" : "tags";

    for (let i = 0; i < elementsList.length; i++) {
        let items = elementsList[i].getElementsByClassName(elementsClassName)[0];
        let txtValue = items.textContent || items.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            elementsList[i].style.display = "";
        } else {
            elementsList[i].style.display = "none";
        }
    }
}