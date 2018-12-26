var searchTerm = "";

$(document).ready(function () {

  //==============================
  // Click back to home button
  //==============================
  $(".home-button").on("click", function () {
    location.reload();
  });

  //==============================
  // Click Food search (Left side)
  //==============================
  $("#food-search-button").on("click", function () {
    event.preventDefault();

    searchTerm = $("#food-search").val();
    var foodQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm;
    $.ajax({
      url: foodQueryURL,
      method: "GET"
    }).then(function (response) {
      $("#food-photo").attr("src", response.meals[0].strMealThumb);

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append(searchTerm);
      $("#food-results").append("<h4>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + response.meals[0].strIngredient1 + "; ") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + response.meals[0].strIngredient2 + "; ") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + response.meals[0].strIngredient3 + "; ") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + response.meals[0].strIngredient4 + "; ") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + response.meals[0].strIngredient5 + "; ") };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + response.meals[0].strIngredient6 + "; ") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + response.meals[0].strIngredient7 + "; ") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + response.meals[0].strIngredient8 + "; ") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + response.meals[0].strIngredient9 + "; ") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + response.meals[0].strIngredient10 + "; ") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + response.meals[0].strIngredient11 + "; ") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + response.meals[0].strIngredient12 + "; ") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + response.meals[0].strIngredient13 + "; ") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + response.meals[0].strIngredient14 + "; ") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + response.meals[0].strIngredient15 + "; ") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + response.meals[0].strIngredient16 + "; ") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + response.meals[0].strIngredient17 + "; ") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + response.meals[0].strIngredient18 + "; ") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + response.meals[0].strIngredient19 + "; ") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + response.meals[0].strIngredient20 + "; ") };

      //jumbotron change:
      $("#drink-video").css("display", "none");
      $("#food-video").css("display", "block");
    })
  });

  //==============================
  // Click Random Food (Left side)
  //==============================
  $("#food-random-button").on("click", function () {
    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#food-photo").attr("src", response.meals[0].strMealThumb);

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append(searchTerm);
      $("#food-results").append("<h4>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + response.meals[0].strIngredient1 + "; ") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + response.meals[0].strIngredient2 + "; ") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + response.meals[0].strIngredient3 + "; ") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + response.meals[0].strIngredient4 + "; ") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + response.meals[0].strIngredient5 + "; ") };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + response.meals[0].strIngredient6 + "; ") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + response.meals[0].strIngredient7 + "; ") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + response.meals[0].strIngredient8 + "; ") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + response.meals[0].strIngredient9 + "; ") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + response.meals[0].strIngredient10 + "; ") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + response.meals[0].strIngredient11 + "; ") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + response.meals[0].strIngredient12 + "; ") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + response.meals[0].strIngredient13 + "; ") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + response.meals[0].strIngredient14 + "; ") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + response.meals[0].strIngredient15 + "; ") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + response.meals[0].strIngredient16 + "; ") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + response.meals[0].strIngredient17 + "; ") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + response.meals[0].strIngredient18 + "; ") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + response.meals[0].strIngredient19 + "; ") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + response.meals[0].strIngredient20 + "; ") };

      //jumbotron change:
      $("#drink-video").css("display", "none");
      $("#food-video").css("display", "block");
    })
  });


  //==============================
  // Click Food search picture (Left side)
  //==============================
  // $("#food-photo").on("click", function () {
  //   $("#food-photo").attr("src", "")
  // })

  //==============================
  // Click Sample Food (Left side)
  //==============================
  $(".sample-food").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
  })


  //=============================== Food =========================================================================================================================
  //=================================================================== Drink ====================================================================================

  //==============================
  // Click Drink search (right side)
  //==============================
  $("#drink-search-button").on("click", function () {
    event.preventDefault();

    searchTerm = $("#drink-search").val();
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
    // if (searchTerm.length > 0) {
    $.ajax({
      url: drinkQueryURL,
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass);
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + response.drinks[0].strIngredient15 + "<br>") };

      //jumbotron change:
      $("#food-video").css("display", "none");
      $("#drink-video").css("display", "block");
    });
  });


  //==============================
  // Click Random Drink (right side)
  //==============================
  $("#drink-random-button").on("click", function () {
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass);
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + response.drinks[0].strIngredient15 + "<br>") };

      //jumbotron change:
      $("#food-video").css("display", "none");
      $("#drink-video").css("display", "block");
    });
  });

  //==============================
  // Click Sample Drink (right side)
  //==============================
  $(".sample-drink").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
  })

})