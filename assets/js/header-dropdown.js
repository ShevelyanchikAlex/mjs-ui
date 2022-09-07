'use strict';

const selectedItem = document.querySelector('.selected-item');
const dropdown = document.querySelector('.dropdown');
const items = dropdown.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('change', () => {

        if (item.checked) {
            selectedItem.innerHTML = item.value;
            dropdown.open = false;
        }
    });
});