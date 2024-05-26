let blurOption;

let cart = [0, 0, 0, 0, 0, 0, 0, 0];
let totalCartQuantity = 0;
let totalCost = 0.00;

let currentProductID;

function showSearch() {
    document.getElementById("search-section").style.visibility = "visible";
    document.getElementById("search-input").focus();
    blurBackground();
    blurOption = 2;
}

function showProductDropdown() {
    document.getElementById("product-drop-down").style.display = "table";
    document.getElementById("product-drop-down").style.opacity = "100%";
    document.getElementById("products-btn").style.backgroundColor = "#2B401D";
    document.getElementById("products-btn").style.color = "#FFF9E2";
}

function hideProductDropdown() {
    document.getElementById("product-drop-down").style.display = "none";
    document.getElementById("product-drop-down").style.opacity = "0";
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

    currentProductID = id;

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

    // document.getElementById("product").style.display = "flex";
    document.getElementById("product").style.visibility = "visible";
    document.getElementById("product").style.opacity = "100%";
    document.getElementById("product").style.pointerEvents = "all";
    blurBackground();
    blurOption = 1;
}

function hideProduct() {
    unblurBackground();
    document.getElementById("product").style.opacity = "0";
}

function blurBackground() {
    document.getElementById("blur-overlay").style.visibility = "visible";
}

function unblurBackground() {

    if (blurOption == 1) {
        document.getElementById("product").style.opacity = "0";
        //document.getElementById("product").style.display = "none";
        document.getElementById("product").style.pointerEvents = "none";
    } else if (blurOption == 2) {
        document.getElementById("search-section").style.visibility = "hidden";
        document.getElementById("page-content").style.pointerEvents = "all";
    } else if (blurOption == 3) {
        document.getElementById("cart-container").style.visibility = "hidden";
        document.getElementById("cart-container").style.opacity = "0";
        clearCart();
        totalCost = 0;
    }

    document.getElementById("blur-overlay").style.visibility = "hidden";
    document.getElementById("body").style.overflow = "scroll";
}

function incrementQuantity() {
    document.getElementById("quantity-1").textContent = parseInt(document.getElementById("quantity-1").textContent) + 1;
}

function showCart() {
    document.getElementById("cart-container").style.visibility = "visible";
    document.getElementById("cart-container").style.opacity = "100%";
    document.getElementById("body").style.overflow = "hidden";
    //console.log(totalCartQuantity);
    for (i=0; i<8; i++) {
        if (cart[i] != 0) {
            addProductToList(i, cart[i]);
        }
    }

    document.getElementById("subtotal").textContent = "$" + totalCost.toFixed(2);

    blurBackground();
    blurOption = 3;
}

function addToCart() {
    let productIndex = 0;
    if (currentProductID == "bananas") {
        productIndex = 0;
    } else if (currentProductID == "conversation-hearts") {
        productIndex = 1;
    } else if (currentProductID == "blue-raspberry-wheels") {
        productIndex = 2;
    } else if (currentProductID == "candy-bullets") {
        productIndex = 3;
    } else if (currentProductID == "cherry-wheels") {
        productIndex = 4;
    } else if (currentProductID == "almond-brittle") {
        productIndex = 5;
    } else if (currentProductID == "dolly-mix") {
        productIndex = 6;
    } else if (currentProductID == "fizzoes") {
        productIndex = 7;
    }

    cart[productIndex]++;

    totalCartQuantity++;
    unblurBackground();
}

function addProductToList(productIndex, quantity) {
    let productName;
    let productPrice;
    let productQuantity = quantity;
    let productImageDirectory;

    if (productIndex == 0) {
        productName = "Bananas";
        productPrice = "6.00";
        productImageDirectory = "assets/images/products/bananas.jpeg"
    } else if (productIndex == 1) {
        productName = "Conversation Hearts";
        productPrice = "6.50";
        productImageDirectory = "assets/images/products/conversation-hearts.png"
    } else if (productIndex == 2) {
        productName = "Blue Raspberry Wheels";
        productPrice = "6.00";
        productImageDirectory = "assets/images/products/blue-raspberry-wheels.jpg"
    } else if (productIndex == 3) {
        productName = "Candy Bullets";
        productPrice = "6.00";
        productImageDirectory = "assets/images/products/candy-bullets.jpeg"
    } else if (productIndex == 4) {
        productName = "Cherry Wheels";
        productPrice = "6.50";
        productImageDirectory = "assets/images/products/cherry-wheels.jpeg"
    } else if (productIndex == 5) {
        productName = "Almond Brittle";
        productPrice = "7.00";
        productImageDirectory = "assets/images/products/almond-brittle.jpeg"
    } else if (productIndex == 6) {
        productName = "Dolly Mix";
        productPrice = "6.00";
        productImageDirectory = "assets/images/products/dolly-mix.jpeg"
    } else if (productIndex == 7) {
        productName = "Fizzoes";
        productPrice = "6.50";
        productImageDirectory = "assets/images/products/fizzoes.jpeg"
    }

    totalCost += parseFloat(productPrice);

    createNewProductInCart(productName, ("$" + productPrice), productImageDirectory, productQuantity);
}

function createNewProductInCart(name, price, imageDirectory, quantity) {
    let cartItemDiv = document.createElement('div');
    cartItemDiv.setAttribute("class", "cart-item");

    let cartItemCol1 = document.createElement('div');
    cartItemCol1.setAttribute("class", "cart-item-col-1");
    let productImage = document.createElement("img");
    productImage.setAttribute("src", imageDirectory);
    
    cartItemCol1.append(productImage);


    let cartItemCol2 = document.createElement('div');
    cartItemCol2.setAttribute("class", "cart-item-col-2");

    let cartItemRow1 = document.createElement('div');
    cartItemRow1.setAttribute("class", "cart-item-row");
    let productName = document.createElement('h5');
    productName.textContent = name;
    cartItemRow1.appendChild(productName);

    let cartItemRow2 = document.createElement('div');
    cartItemRow2.setAttribute("class", "cart-item-row cart-item-row-2");

    let cartItemRowCol1 = document.createElement('div');
    cartItemRowCol1.setAttribute("class", "cart-item-row-col");
    let productPrice = document.createElement('p');
    productPrice.textContent = price;
    cartItemRowCol1.appendChild(productPrice);

    let cartItemRowCol2 = document.createElement('div');
    cartItemRowCol2.setAttribute("class", "cart-item-row-col");

    let quantityContainer = document.createElement('div');
    quantityContainer.setAttribute("class", "quantity");
    let quantityTable = document.createElement('table');
    let quantityTableBody = document.createElement('tbody');
    let quantityTableRow = document.createElement('tr');

    let quantityTableDataCol1 = document.createElement('td');
    quantityTableDataCol1.setAttribute("class", "quantity-col quantity-col-1");
    quantityTableDataCol1.style.borderRight = "none";
    let minusIcon = document.createElement('img');
    minusIcon.setAttribute("src", "assets/icons/minus.svg");

    quantityTableDataCol1.appendChild(minusIcon);

    let quantityTableDataCol2 = document.createElement('td');
    quantityTableDataCol2.setAttribute("class", "quantity-col quantity-col-2");
    quantityTableDataCol2.setAttribute("id", "quantity-10");
    quantityTableDataCol2.textContent = quantity;
    
    let quantityTableDataCol3 = document.createElement('td');
    quantityTableDataCol3.setAttribute("class", "quantity-col quantity-col-3");
    quantityTableDataCol3.style.borderLeft = "none";
    let plusIcon = document.createElement('img');
    plusIcon.setAttribute("src", "assets/icons/plus.svg");

    quantityTableDataCol3.appendChild(plusIcon);


    quantityTableRow.appendChild(quantityTableDataCol1);
    quantityTableRow.appendChild(quantityTableDataCol2);
    quantityTableRow.appendChild(quantityTableDataCol3);

    quantityTableBody.append(quantityTableRow);
    
    quantityTable.append(quantityTableBody);

    quantityContainer.appendChild(quantityTable);

    cartItemRowCol2.appendChild(quantityContainer);

    cartItemRow2.appendChild(cartItemRowCol1);
    cartItemRow2.appendChild(cartItemRowCol2);

    cartItemCol2.appendChild(cartItemRow1);
    cartItemCol2.appendChild(cartItemRow2);

    cartItemDiv.appendChild(cartItemCol1);
    cartItemDiv.appendChild(cartItemCol2);

    document.querySelector("#cart-contents").appendChild(cartItemDiv);
}

function clearCart() {
    document.querySelectorAll(".cart-item").forEach( (x) => {
        x.remove();
    })
}