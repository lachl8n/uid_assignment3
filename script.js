function showSearch() {
    document.getElementById("search-section").style.opacity = "100%";
    document.getElementById("page-container").style.filter = "blur(8px)";
    document.getElementById("search-input").focus();
}

function closeSearch() {
    document.getElementById("search-section").style.opacity = "0";
    document.getElementById("page-container").style.filter = "none";
}

function showProductDropdown() {
    document.getElementById("product-drop-down").style.opacity = "100%";
    document.addEventListener('mouseout', ()=> {
        document.getElementById("product-drop-down").style.opacity = "0";
    })
}