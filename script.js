let blurOption;

let cart = [0, 0, 0, 0, 0, 0, 0, 0];
let totalCartQuantity = 0;
let totalCost = 0.00;

let currentProductID;

let cartEmpty = true;

function showSearch() {
    // Display the search bar
    document.getElementById("search-section").style.visibility = "visible";
    document.getElementById("search-input").focus();

    // Blurs the background of the webpage and indicates the use of the blur
    blurBackground();
    blurOption = 2;
}

function showProductDropdown() {
    // Display the products dropdown menu
    document.getElementById("product-drop-down").style.display = "table";
    document.getElementById("product-drop-down").style.opacity = "100%";
    document.getElementById("products-btn").style.backgroundColor = "#2B401D";
    document.getElementById("products-btn").style.color = "#FFF9E2";
}

function hideProductDropdown(baseColour) {
    // Hides the products dropdown menu
    document.getElementById("product-drop-down").style.display = "none";
    document.getElementById("product-drop-down").style.opacity = "0";

    // Determines the colour to return the "Products" button to
    if (baseColour == 'green') {
        document.getElementById("products-btn").style.color = "#FFF9E2";
        document.getElementById("products-btn").style.backgroundColor = "#94AA83";
    } else {
        document.getElementById("products-btn").style.color = "#2B401D";
        document.getElementById("products-btn").style.backgroundColor = "#FFF9E2";
    }
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
    
    // Uses the ID of the div in which the function was called to determine which product was selected
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

    // Changes all values in the product pop-up display to the selected product
    document.getElementById("product-image").src=productImage;
    document.getElementById("product-name").textContent = productName;
    document.getElementById("product-price").textContent = productPrice;
    document.getElementById("product-rating").textContent = productRating;
    document.getElementById("product-orders").textContent = productOrders + " orders";
    document.getElementById("product-weight").textContent = productWeight + " g";
    document.getElementById("product-description").textContent = productDescription;
    document.getElementById("product-ingredients").textContent = productIngredients;
    document.getElementById("product-allergens").textContent = productAllergens;
    

    // Prevents the user from scrolling while the pop-up is visible
    document.getElementById("body").style.overflowY = "hidden";

    // Displays the product-pop up to the user
    document.getElementById("product").style.visibility = "visible";
    document.getElementById("product").style.opacity = "100%";
    document.getElementById("product").style.pointerEvents = "all";

    // Blurs the background of the webpage and indicates the use of the blur
    blurBackground();
    blurOption = 1;
}

function hideProduct() {
    // Hides the product pop-up by removing the blur overlay and making the pop-up invisible
    unblurBackground();
    document.getElementById("product").style.opacity = "0";
}

function blurBackground() {
    // Displays the background to the user by removing the blur overlay
    document.getElementById("blur-overlay").style.visibility = "visible";
}

function unblurBackground() {
    // Determines appropriate action when unburring the webpage depending on the action to reverse
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
    document.getElementById("body").style.overflowY = "scroll";
}

function incrementQuantity() {
    // Increments the quantity of the product in the cart
    document.getElementById("quantity-1").textContent = parseInt(document.getElementById("quantity-1").textContent) + 1;
}

function showCart() {
    // Display the cart pop-up to the user
    document.getElementById("cart-container").style.visibility = "visible";
    document.getElementById("cart-container").style.opacity = "100%";
    document.getElementById("body").style.overflowY = "hidden";
    console.log(totalCartQuantity);
    // Iteratively adds the products selected by the user to the list in the cart
    if (totalCartQuantity != 0) {
        for (i=0; i<8; i++) {
            if (cart[i] != 0) {
                addProductToList(i, cart[i]);
            }
        }

        console.log(cartEmpty);

        if (cartEmpty == true) {
            document.getElementById("empty-cart").style.display = "none";
            document.getElementById("cart-btn").style.pointerEvents = "all";
            cartEmpty = false;
        }
    }

    // Displays the total cost to the user in the cart
    document.getElementById("subtotal").textContent = "$" + totalCost.toFixed(2);

    for (i=0; i<8; i++) {
        console.log(cart[i]);
    }

    // Blurs the background of the webpage and indicates the use of the blur
    blurBackground();
    blurOption = 3;
}

function addToCart() {
    // Uses the ID of the product to determine which product to add to the cart
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

    // Adds the product to a list representing the cart
    cart[productIndex]++;


    // Increments the quantity of total products selected
    totalCartQuantity++;

    // Unblurs the background
    unblurBackground();

    updateCart();
}

function addProductToList(productIndex, quantity) {
    let productName;
    let productPrice;
    let productQuantity = quantity;
    let productImageDirectory;

    // Using the index in the list, determining the type of product it represents and provides the relevant information
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

    // Adds cost of product to total cost
    totalCost += parseFloat(productPrice) * parseFloat(productQuantity);

    // Creates a new HTML element to represent a product in the list in the cart
    createNewProductInCart(productName, ("$" + productPrice), productImageDirectory, productQuantity);
}

function createNewProductInCart(name, price, imageDirectory, quantity) {
    // Creates the parent div to hold all the product information
    let cartItemDiv = document.createElement('div');
    cartItemDiv.setAttribute("class", "cart-item");

    // Creates a div for the first of two columns in the list item graphic
    let cartItemCol1 = document.createElement('div');
    cartItemCol1.setAttribute("class", "cart-item-col-1");
    let productImage = document.createElement("img");
    productImage.setAttribute("src", imageDirectory);
    
    // Appends the image element as a child to the first column in the list graphic
    cartItemCol1.append(productImage);

    // Creates a div for the second of two columns in the list item graphic
    let cartItemCol2 = document.createElement('div');
    cartItemCol2.setAttribute("class", "cart-item-col-2");

    // Creates a div for the first of two rows in the second column in the list item graphic
    let cartItemRow1 = document.createElement('div');
    cartItemRow1.setAttribute("class", "cart-item-row");
    let productName = document.createElement('h5');
    productName.textContent = name;
    // Appends the header element as a child to the first row in the second column of the list graphic
    cartItemRow1.appendChild(productName);

    // Creates a div for the second of two rows in the second column in the list item graphic
    let cartItemRow2 = document.createElement('div');
    cartItemRow2.setAttribute("class", "cart-item-row cart-item-row-2");

    // Creates a div for the first of two columns in the second row in the second column in the list item graphic
    let cartItemRowCol1 = document.createElement('div');
    cartItemRowCol1.setAttribute("class", "cart-item-row-col");
    let productPrice = document.createElement('p');
    productPrice.textContent = price;
    // Appends the paragraph element as a child to the first column in the second row in the second column in the list item graphic
    cartItemRowCol1.appendChild(productPrice);

    // Creates a div for the second of two columns in the second row in the second column in the list item graphic
    let cartItemRowCol2 = document.createElement('div');
    cartItemRowCol2.setAttribute("class", "cart-item-row-col");

    // Creates a div to hold the quantity and its increment/decrement buttons
    let quantityContainer = document.createElement('div');
    quantityContainer.setAttribute("class", "quantity");
    // Creates a table to hold a decrement button, an increment button and the quantity value
    let quantityTable = document.createElement('table');
    let quantityTableBody = document.createElement('tbody');
    let quantityTableRow = document.createElement('tr');

    // Creates the decrement button as a table data element
    let quantityTableDataCol1 = document.createElement('td');
    quantityTableDataCol1.setAttribute("class", "quantity-col quantity-col-1");
    quantityTableDataCol1.style.borderRight = "none";
    let minusIcon = document.createElement('img');
    minusIcon.setAttribute("src", "assets/icons/minus.svg");
    // Appends decrement icon as a child to the first table data element
    quantityTableDataCol1.appendChild(minusIcon);

    // Creates the quantity value as a table data element
    let quantityTableDataCol2 = document.createElement('td');
    quantityTableDataCol2.setAttribute("class", "quantity-col quantity-col-2");
    quantityTableDataCol2.setAttribute("id", "quantity-10");
    quantityTableDataCol2.textContent = quantity;
    
    // Creates the increment button as a table data element
    let quantityTableDataCol3 = document.createElement('td');
    quantityTableDataCol3.setAttribute("class", "quantity-col quantity-col-3");
    quantityTableDataCol3.style.borderLeft = "none";
    let plusIcon = document.createElement('img');
    plusIcon.setAttribute("src", "assets/icons/plus.svg");
    // Appends increment icon as a child to the third table data element
    quantityTableDataCol3.appendChild(plusIcon);

    // Appends all table cells to the table row
    quantityTableRow.appendChild(quantityTableDataCol1);
    quantityTableRow.appendChild(quantityTableDataCol2);
    quantityTableRow.appendChild(quantityTableDataCol3);

    // Appends the table row to the table body
    quantityTableBody.append(quantityTableRow);
    
    // Appends the table body to the table
    quantityTable.append(quantityTableBody);

    // Appends the table as a child to the quantity div element
    quantityContainer.appendChild(quantityTable);

    // Appends the quantity div element to the second column in the second row in the second column the list item graphic
    cartItemRowCol2.appendChild(quantityContainer);

    // Appends the columns of the second row to the second row div element
    cartItemRow2.appendChild(cartItemRowCol1);
    cartItemRow2.appendChild(cartItemRowCol2);

    // Appends the rows of the second column to the second column div element
    cartItemCol2.appendChild(cartItemRow1);
    cartItemCol2.appendChild(cartItemRow2);

    // Appends the columns of the list item graphic to the list item div element
    cartItemDiv.appendChild(cartItemCol1);
    cartItemDiv.appendChild(cartItemCol2);

    // Appends the fully constructed list item to the list of cart contents
    document.querySelector("#cart-contents").appendChild(cartItemDiv);
}

function clearCart() {
    // Iteratively deletes all cart items in the HTML document
    document.querySelectorAll(".cart-item").forEach( (x) => {
        x.remove();
    })
}

function updateCart() {
    console.log(totalCartQuantity);
    if (totalCartQuantity > 0) {
        document.getElementById("cart-count").style.display = "block";
    } else {
        document.getElementById("cart-count").style.display = "none";
    }

    document.getElementById("cart-count").textContent = totalCartQuantity;
}

function populateCart() {
    //console.log(localStorage.getItem("totalQuantity"));
    totalCartQuantity = localStorage.getItem("totalQuantity");
    cart[0] = localStorage.getItem("Bananas");
    cart[1] = localStorage.getItem("ConversationHearts");
    cart[2] = localStorage.getItem("BlueRaspWheels");
    cart[3] = localStorage.getItem("CandyBullets");
    cart[4] = localStorage.getItem("CherryWheels");
    cart[5] = localStorage.getItem("AlmondBrittle");
    cart[6] = localStorage.getItem("DollyMix");
    cart[7] = localStorage.getItem("Fizzoes");
    
    if (totalCartQuantity != 0) {
        for (i=0; i<8; i++) {
            if (cart[i] != 0) {
                addProductToCheckoutCart(i, cart[i]);
            }
        }
    }
    
}

function addProductToCheckoutCart(productIndex, quantity) {
    let productName;
    let productPrice;
    let productQuantity = quantity;
    let productImageDirectory;

    // Using the index in the list, determining the type of product it represents and provides the relevant information
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

    // Adds cost of product to total cost
    totalCost += parseFloat(productPrice) * parseFloat(productQuantity);

    // Creates a new HTML element to represent a product in the list in the cart
    createProductInCheckoutCart(productName, ("$" + productPrice), productImageDirectory, productQuantity);
}

function createProductInCheckoutCart(name, price, imageDirectory, quantity) {
    // Creates the parent div to hold all the product information
    let cartItemDiv = document.createElement('div');
    cartItemDiv.setAttribute("class", "cart-item");

    // Creates a div for the first of two columns in the list item graphic
    let cartItemCol1 = document.createElement('div');
    cartItemCol1.setAttribute("class", "cart-item-col-1");
    let productImage = document.createElement("img");
    productImage.setAttribute("src", imageDirectory);
    
    // Appends the image element as a child to the first column in the list graphic
    cartItemCol1.append(productImage);

    // Creates a div for the second of two columns in the list item graphic
    let cartItemCol2 = document.createElement('div');
    cartItemCol2.setAttribute("class", "cart-item-col-2");

    // Creates a div for the first of two rows in the second column in the list item graphic
    let cartItemRow1 = document.createElement('div');
    cartItemRow1.setAttribute("class", "cart-item-row");
    let productName = document.createElement('h5');
    productName.textContent = name;
    // Appends the header element as a child to the first row in the second column of the list graphic
    cartItemRow1.appendChild(productName);

    // Creates a div for the second of two rows in the second column in the list item graphic
    let cartItemRow2 = document.createElement('div');
    cartItemRow2.setAttribute("class", "cart-item-row cart-item-row-2");

    // Creates a div for the first of two columns in the second row in the second column in the list item graphic
    let cartItemRowCol1 = document.createElement('div');
    cartItemRowCol1.setAttribute("class", "cart-item-row-col");
    let productPrice = document.createElement('p');
    productPrice.textContent = price;
    // Appends the paragraph element as a child to the first column in the second row in the second column in the list item graphic
    cartItemRowCol1.appendChild(productPrice);

    // Creates a div for the second of two columns in the second row in the second column in the list item graphic
    let cartItemRowCol2 = document.createElement('div');
    cartItemRowCol2.setAttribute("class", "cart-item-row-col");

    // Creates a div for the product quantity
    let quantityDiv = document.createElement('div');
    quantityDiv.setAttribute("class", "immutable-quantity");
    // Creates a div for the paragraph element to store the quantity
    let quantityParagraph = document.createElement('p');
    quantityParagraph.textContent = "Quantity: " + quantity;

    // Appends quantity paragraph element to container
    quantityDiv.appendChild(quantityParagraph);

    // Appends the quantity div element to the second column in the second row in the second column the list item graphic
    cartItemRowCol2.appendChild(quantityDiv);

    // Appends the columns of the second row to the second row div element
    cartItemRow2.appendChild(cartItemRowCol1);
    cartItemRow2.appendChild(cartItemRowCol2);

    // Appends the rows of the second column to the second column div element
    cartItemCol2.appendChild(cartItemRow1);
    cartItemCol2.appendChild(cartItemRow2);

    // Appends the columns of the list item graphic to the list item div element
    cartItemDiv.appendChild(cartItemCol1);
    cartItemDiv.appendChild(cartItemCol2);

    document.querySelector("#checkout-cart").appendChild(cartItemDiv);
}

function saveDataToLocalStorage() {
    localStorage.setItem("totalQuantity", totalCartQuantity);
    localStorage.setItem("Bananas", cart[0]);
    localStorage.setItem("ConversationHearts", cart[1]);
    localStorage.setItem("BlueRaspWheels", cart[2]);
    localStorage.setItem("CandyBullets", cart[3]);
    localStorage.setItem("CherryWheels", cart[4]);
    localStorage.setItem("AlmondBrittle", cart[5]);
    localStorage.setItem("DollyMix", cart[6]);
    localStorage.setItem("Fizzoes", cart[7]);

}