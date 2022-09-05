let itemsGridViewScroll = document.getElementById('items-grid-view');
itemsGridViewScroll.addEventListener("scroll", updateScrollData);

if (localStorage.getItem("scroll-height") != null) {
    loadNextElements(localStorage.getItem("items-length"));
    itemsGridViewScroll.scrollTo(0, parseInt(localStorage.getItem("scroll-height")));
}

function scrollToTop() {
    itemsGridViewScroll.scrollTo(0, 0);
}

function updateScrollData() {
    localStorage.setItem("items-length", itemsGridViewScroll.children.length.toString());
    localStorage.setItem("scroll-height", itemsGridViewScroll.scrollTop.toString());
}