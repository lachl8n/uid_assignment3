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
    document.getElementById("product-drop-down").style.display = "table";
    document.getElementById("products-btn").style.backgroundColor = "#2B401D";
    document.getElementById("products-btn").style.color = "#FFF9E2";
}

function hideProductDropdown() {
    document.getElementById("product-drop-down").style.display = "none";
    document.getElementById("products-btn").style.color = "#2B401D";
    document.getElementById("products-btn").style.backgroundColor = "#FFF9E2";
}

function showProduct(id) {
    let productImage;
    let productName;
    let productPrice;
    let productDescription;
    let productIngredients;
    let productAllergens;
    let productRating;
    let productOrders;
    let productWeight;

    console.log(id);
    if (id == "bananas") {
        productImage = "assets/images/products/bananas.jpeg";
        productName = "Bananas";
        productPrice = "$6.00"
        productRating = "4,9";
        productOrders = "130";
        productWeight = "180";
        productDescription = "Go bananas! These banana flavoured sweets are sure to satisfy little monkeys and big monkeys alike!";
        productIngredients = "Ingredients: Sugar, Glucose Syrup (Wheat), Invert Sugar Syrup, Gelatine, Starch (Maize) Flavour, Colour (102), Coconut Oil, Beeswax, Camauba Wax,";
        productAllergens = "Allergy Information: Contains Gluten, May contain traces of Milk, Peanuts and Tree Nuts";
    } else if (id == "conversation-hearts") {
        productImage = "assets/images/products/conversation-hearts.png";
        productName = "Conversation Hearts";
        productPrice = "$6.50"
        productRating = "4,6";
        productOrders = "80";
        productWeight = "180";
        productDescription = "Let your sweet heart know you love them by giving them one of these sweet compressed candy love hearts with sweet messages on them.";
        productIngredients = "Ingredients: Sugar, (Beef) Gelatin, Food Acid 330, Flavours, Colours(102, 110, 123, 124, 129, 133, 155) Maize, Cornflour.";
    } else if (id == "blue-raspberry-wheels") {
        productImage = "assets/images/products/blue-raspberry-wheels.jpg";
        productName = "Blue Raspberry Wheels";
        productPrice = "$6.50"
        productRating = "0";
        productOrders = "0";
        productWeight = "160";
        productDescription = "Raspberry flavoured licorice wheels.";
        productIngredients = "Ingredients: Sugar, Glucose Syrup, Modified Starch (Wheat flour starch), Stabilisers( Sorbitol syrup, Glycerol), Acids (Citric Acid, Malic Acid, Lactic Acid, Fumeric Acid), Dextrose, Coconut Oil, Gelatine, Flavourings, Emusifier (Mono and Diglycerides of fatty acids), Acidity Regulator (Trisodium Citrate), Glazing Agent (Beeswax), Colour (Brilliant Blue FCF).";
        productAllergens = "Allergy Information: May contain traces of Peanuts and Tree Nuts";
    } else if (id == "candy-bullets") {
        productImage = "assets/images/products/candy-bullets.jpeg";
        productName = "Candy Bullets";
        productPrice = "$6.00"
        productRating = "0";
        productOrders = "0";
        productWeight = "200";
        productDescription = "Brightly coloured candy coated licorice. A bright bite!";
        productIngredients = "Ingredients: Glucose Syrup (Corn, Wheat - contains Sulphites), Sugar, Wheat Starch, Colours (123, 133), Flavours, Glazing Agents (901, 904, Orange Oil)";
    } else if (id == "cherry-wheels") {
        productImage ="assets/images/products/cherry-wheels.jpeg";
        productName = "Cherry Wheels";
        productPrice = "$6.50"
        productRating = "0";
        productOrders = "0";
        productWeight = "160";
        productDescription = "Cherry flavoured licorice wheels.";
        productIngredients = "Ingredients: Glucose Syrup, Sugar, Corn Starch, Wheat Flour, Stabilisers (Glycerol, Sorbitol), Emulsifier (E471), Acid (Citric), Flavourings, Colour (E120), Acidity Regulator (Sodium Citrate), Vegetable Oil, Glazing Agent (Bees Wax)";
        productAllergens = "Allergy Information: May contain traces of Peanuts and Tree Nuts";
    } else if (id == "almond-brittle") {
        productImage = "assets/images/products/almond-brittle.jpeg";
        productName = "Almond Brittle";
        productPrice = "$7.00"
        productRating = "0";
        productOrders = "0";
        productWeight = "190";
        productDescription = "Almonds combine with a light caramel to create a brittle to rival the original.";
        productIngredients = "Ingredients: Sugar, Almonds, Glucose (Corn), Honey, Butter, Bicarb Soda.";
        productAllergens = "Allergen Information: May contain traces of Peanuts and other Tree Nuts";
    } else if (id == "dolly-mix") {
        productImage = "assets/images/products/dolly-mix.jpeg";
        productName = "Dolly Mix";
        productPrice = "$6.00"
        productRating = "0";
        productOrders = "0";
        productWeight = "185";
        productDescription = "Dolly mix is a beautiful mix of small fruit flavoured coconut, foam and jelly sweets.";
        productIngredients = "Ingredients: Sugar, Glucose Syrup, Vegetable Oil, Beef Gelatine, Cornflour, Colours (Anthocyanins, Paprika Extract, Curcumin, Chlorophylls, Beetroot Red), Flavourings, Acid (Citric Acid), Fat Reduced Cocoa Powder, Fruit and Vegetable Concentrates (Apple, Hibicus), Glazing Agent (Pectin)";
        productAllergens = "Allergen Information: May also contain Milk";
    } else if (id == "fizzoes") {
        productImage = "assets/images/products/fizzoes.jpeg";
        productName = "Fizzoes";
        productPrice = "$5.50"
        productRating = "0";
        productOrders = "0";
        productWeight = "200";
        productDescription = "Fizzoes are full of fizzy fun! A hard round sweet, with a fizzy sherbet coating.";
        productIngredients = "Ingredients: Sugar, Glucose, Flavour, Colours (102, 110, 122, 123, 124, 133, 142), Food Acids (330, 334), Sodium Bicarbonate (500)";
    }

    document.getElementById("product-image").src=productImage;
    document.getElementById("product-name").textContent = productName;
    document.getElementById("product-price").textContent = productPrice;
    document.getElementById("product-rating").textContent = productRating;
    document.getElementById("product-orders").textContent = productOrders + " orders";
    document.getElementById("product-weight").textContent = productWeight + " g";
    document.getElementById("product-description").textContent = productDescription;
    document.getElementById("product-ingredients").textContent = productIngredients;
    document.getElementById("product-allergens").textContent = productAllergens;
    

    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("product").style.opacity = "100%";
    document.getElementById("blur-overlay").style.display = "flex";
    blurBackground();
}

function hideProduct() {
    unblurBackground();
    document.getElementById("product").style.opacity = "0";
}

function blurBackground() {
    document.getElementById("blur-overlay").style.display = "flex";
}

function unblurBackground() {
    // if (document.getElementById("search-section").style.display != "none") {
    //     closeSearch();
    // }
    document.getElementById("blur-overlay").style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
}