document.addEventListener("DOMContentLoaded", function () {
    var specialsTile = document.getElementById("specials-tile");
    specialsTile.addEventListener("click", function () {
        var categories = ["lunch", "dinner", "sushi"];
        var randomCategory = categories[Math.floor(Math.random() * categories.length)];
        window.location.href = `specials.html?category=${randomCategory}`;
    });
});
