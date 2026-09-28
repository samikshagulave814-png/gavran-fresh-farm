/* =========================================
   GAVRAN FRESH FARM
   FINAL WEBSITE SCRIPT
========================================= */


/* WHATSAPP NUMBER */

const whatsappNumber = "917387370263";


/* PRODUCT PRICES */

const prices = {
    milk: 90,
    eggs: 15
};


/* =========================================
   PRODUCT SEARCH
========================================= */

const searchInput =
    document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                this.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    ".product-card"
                );

            cards.forEach(function (card) {

                const productName =
                    card.dataset.name.toLowerCase();

                if (
                    productName.includes(searchText)
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}


/* =========================================
   SELECT PRODUCT
========================================= */

function selectProduct(product) {

    const select =
        document.getElementById("orderProduct");

    if (!select) return;


    if (product === "Milk") {

        select.value = "milk";

    }


    if (product === "Eggs") {

        select.value = "eggs";

    }


    updatePrice();


    const orderSection =
        document.getElementById("order");

    if (orderSection) {

        orderSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   CHICKEN WHATSAPP ENQUIRY
========================================= */

function selectChicken() {

    const message =
        "Hello Gavran Fresh Farm,%0A%0A" +
        "I want to enquire about Farm Chicken.";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(url, "_blank");

}


/* =========================================
   UPDATE PRICE
========================================= */

function updatePrice() {

    const product =
        document.getElementById(
            "orderProduct"
        ).value;


    const quantity =
        parseInt(
            document.getElementById(
                "quantity"
            ).value
        ) || 1;


    const price =
        prices[product];


    const total =
        price * quantity;


    document.getElementById(
        "totalPrice"
    ).innerText =
        "₹" + total;

}


/* =========================================
   QUANTITY
========================================= */

function changeQuantity(change) {

    const quantityInput =
        document.getElementById(
            "quantity"
        );


    let quantity =
        parseInt(
            quantityInput.value
        ) || 1;


    quantity += change;


    if (quantity < 1) {

        quantity = 1;

    }


    quantityInput.value =
        quantity;


    calculateTotal();

}


/* =========================================
   CALCULATE TOTAL
========================================= */

function calculateTotal() {

    updatePrice();

}


/* =========================================
   WHATSAPP ORDER
========================================= */

function sendOrder() {

    const product =
        document.getElementById(
            "orderProduct"
        ).value;


    const quantity =
        parseInt(
            document.getElementById(
                "quantity"
            ).value
        ) || 1;


    let productName = "";
    let unit = "";
    let price = 0;


    if (product === "milk") {

        productName =
            "Fresh Buffalo Milk";

        unit = "litre";

        price = prices.milk;

    }


    if (product === "eggs") {

        productName =
            "Fresh Farm Eggs";

        unit = "egg";

        price = prices.eggs;

    }


    const total =
        price * quantity;


    const message =
        "Hello Gavran Fresh Farm,\n\n" +

        "I want to place an order.\n\n" +

        "Product: " +
        productName +
        "\n" +

        "Quantity: " +
        quantity +
        " " +
        unit +
        "\n" +

        "Total: ₹" +
        total +
        "\n\n" +

        "Please confirm my order.\n\n" +

        "Thank you.";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Gavran Fresh Farm website loaded successfully!"
);