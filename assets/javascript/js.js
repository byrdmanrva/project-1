
var searchTerm = "";

$(document).ready(function () {
    $("#search-button").on("click", function() {
        event.preventDefault()
        searchTerm = $("#search").val();
        var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
        $.ajax({
            url: drinkQueryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response.drinks[0])
            var drinkImage = $("<img>")
            drinkImage.attr("id", "drinkImage");
            drinkImage.attr("src", response.drinks[0].strDrinkThumb);
            $("#results").append("Drink: " + response.drinks[0].strDrink);
            $("#results").append("</br> Glass type: " + response.drinks[0].strGlass);
            $("#results").append("</br> Indredients:</br>- " + response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1);
            $("#results").append("</br>- " + response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2);
            $("#results").append("</br>- " + response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3);
            $("#results").append("</br>- " + response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4);
            $("#results").append("</br>- " + response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5);
            $("#results").append("</br>- " + response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6);
            $("#results").append("</br>- " + response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7);
            $("#results").append("</br> Instructions: " + response.drinks[0].strInstructions);
            $("#results").append(drinkImage);
        })
    })
})