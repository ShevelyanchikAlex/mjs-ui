'use strict';

const W3_INCLUDE_HTML_ATTRIBUTE = "w3-include-html";
const PAGE_NOT_FOUND = "Page not found.";

function includeHTML() {
    let elementsList, i, element, file, xhttp;
    elementsList = document.getElementsByTagName("*");
    for (i = 0; i < elementsList.length; i++) {
        element = elementsList[i];
        file = element.getAttribute(W3_INCLUDE_HTML_ATTRIBUTE);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status === 404) {
                        element.innerHTML = PAGE_NOT_FOUND;
                    }
                    element.removeAttribute(W3_INCLUDE_HTML_ATTRIBUTE);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

includeHTML();