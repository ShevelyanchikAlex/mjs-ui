'use strict';

function filterBySearchInput() {
    let input = document.getElementById('search-form-input');
    let filter = input.value.toUpperCase();
    let gridView = document.getElementById("items-grid-view");
    let elementsList = gridView.getElementsByTagName('div');

    for (let i = 0; i < elementsList.length; i++) {
        let items = elementsList[i].getElementsByClassName("card-name")[0];
        let txtValue = items.textContent || items.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            elementsList[i].style.display = "";
        } else {
            elementsList[i].style.display = "none";
        }
    }
}