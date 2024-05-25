function showSearch() {
    document.getElementById("search-section").style.display = "flex";
    document.getElementById("search-input").focus();
    blurBackground();
}

function closeSearch() {
    document.getElementById("search-section").style.display = "none";
    unblurBackground();
    document.getElementById("page-content").style.pointerEvents = "all";
}

function showProductDropdown() {
    document.getElementById("product-drop-down").style.opacity = "100%";
    document.getElementById("products-btn").style.backgroundColor = "#2B401D";
    document.getElementById("products-btn").style.color = "#FFF9E2";
}

function hideProductDropdown() {
    document.getElementById("product-drop-down").style.opacity = "0";
    document.getElementById("products-btn").style.color = "#2B401D";
    document.getElementById("products-btn").style.backgroundColor = "#FFF9E2";
}

function showProduct() {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("product-banana").style.opacity = "100%";
    document.getElementById("blur-overlay").style.display = "flex";
    blurBackground();
}

function hideProduct() {
    unblurBackground();
    document.getElementById("product-banana").style.opacity = "0";
}

function blurBackground() {
    document.getElementById("blur-overlay").style.display = "flex";
}

function unblurBackground() {
    if (document.getElementById("search-section").style.display != "none") {
        closeSearch();
    }
    document.getElementById("blur-overlay").style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
}