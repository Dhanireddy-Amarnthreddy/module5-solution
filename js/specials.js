document.addEventListener("DOMContentLoaded", function () {
    var specialItemsDiv = document.getElementById("special-items");
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');

    var items = {
        lunch: [
            { name: "Grilled Chicken Sandwich", image: "/image/" },
            { name: "Caesar Salad", image: "/image/" }
        ],
        dinner: [
            { name: "Steak", image: "/image/" },
            { name: "Lobster", image: "/image/" }
        ],
        sushi: [
            { name: "California Roll", image: "/image/" },
            { name: "Spicy Tuna Roll", image: "/image/" }
        ]
    };

    if (category && items[category]) {
        items[category].forEach(item => {
            var itemElement = document.createElement("div");
            itemElement.classList.add("item");
            itemElement.innerHTML = `<img src="${item.image}" alt="${item.name}">
                                     <h2>${item.name}</h2>`;
            specialItemsDiv.appendChild(itemElement);
        });
    } else {
        specialItemsDiv.innerHTML = "<p>No items found for this category.</p>";
    }
});
