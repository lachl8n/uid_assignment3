let backgroundBlurred = false;

function showSearch() {
    document.getElementById("search-section").style.opacity = "100%";
    document.getElementById("search-input").focus();
    blurBackground();
}

function closeSearch() {
    document.getElementById("search-section").style.opacity = "0";
    document.getElementById("page-content").style.filter = "none";
    document.getElementById("page-content").style.pointerEvents = "all";
}

function showProductDropdown() {
    document.getElementById("product-drop-down").style.opacity = "100%";
}

function hideProductDropdown() {
    document.getElementById("product-drop-down").style.opacity = "0";
}

function showProduct() {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("product-banana").style.opacity = "100%";
    blurBackground();
}

function blurBackground() {
    console.log(backgroundBlurred);
    document.getElementById("page-content").style.filter = "blur(5px)";
    document.getElementById("page-content").style.pointerEvents = "none";
    backgroundBlurred = true;
}

function unblurBackground() {
    if (backgroundBlurred) {
        document.getElementById("page-container").addEventListener("click", () => {
            console.log("leave");
            document.getElementById("page-content").style.filter = "none";
            document.getElementById("page-content").style.pointerEvents = "all";
            document.getElementById("body").style.overflow = "none";
            document.getElementById("product-banana").style.opacity = "0";
            location.reload();
        })
    }
    
    backgroundBlurred = false;
}