// 'use strict';

const BOTTOM_OFFSET = 5;
const DEFAULT_ELEMENTS_LOAD_COUNT = 15;

let itemsGridView = document.querySelector('#items-grid-view');

let loadNextElements = function (count) {
    for (let i = 0; i < count; i++) {
        let item = document.createElement('div');
        item.innerHTML = itemsMap.get(Math.floor(Math.random() * 9) + 1);
        itemsGridView.appendChild(item);
    }
}

itemsGridView.addEventListener('scroll', function () {
    if (itemsGridView.scrollTop + itemsGridView.clientHeight + BOTTOM_OFFSET >= itemsGridView.scrollHeight) {
        loadNextElements(DEFAULT_ELEMENTS_LOAD_COUNT);
    }
});

loadNextElements(DEFAULT_ELEMENTS_LOAD_COUNT);