
$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSuG4ZNaUt9ZWeVmGmc8N7UCzo11Sc0UQ",
    authDomain: "project-1-1545354673886.firebaseapp.com",
    databaseURL: "https://project-1-1545354673886.firebaseio.com",
    projectId: "project-1-1545354673886",
    storageBucket: "",
    messagingSenderId: "585680953544"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  //==============================
  // Click Search Meal(Left side)
  //==============================
  $("#food-search-button").on("click", function () {
    $(".bg-gif").css("background-image", "url(assets/images/food.gif)")
    $("#left-side").css("background-image", "url(assets/images/31.jpg)")
    $("#right-side").css("background-image", "url(assets/images/31.jpg)")
    $(".video-play").empty();
    event.preventDefault();

    // api:
    var searchTerm = $("#food-search").val();
    var foodQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm;
    $.ajax({
      url: foodQueryURL,
      method: "GET"
    }).then(function (response) {

      // left side changes:
      $(".food-photo-container").html('<img src="' + response.meals[0].strMealThumb + '" alt="" id="food-photo" class="wow fadeInLeft"></img>');
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>');

      //==============================
      // Click Video Button(in Searching page)
      //==============================
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID

      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".food-photo-container").empty();
        $(".video-play").html('<iframe src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append("<h4 class='wow fadeInRight'>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("<div class='wow fadeInRight'> Area: " + response.meals[0].strArea + "</div><br>");
      $("#food-results").append("<div class='wow fadeInRight'> Category: " + response.meals[0].strCategory + "</div><br>");
      $("#food-results").append("<div class='wow fadeInRight'> Instructions: <br> " + response.meals[0].strInstructions + "</div>");
      $("#food-results").append("<div class='wow fadeInRight'> <br> Ingredients:</div>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure1 + response.meals[0].strIngredient1 + ";</div> ") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure2 + response.meals[0].strIngredient2 + ";</div> ") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure3 + response.meals[0].strIngredient3 + ";</div> ") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure4 + response.meals[0].strIngredient4 + ";</div> ") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure5 + response.meals[0].strIngredient5 + ";</div> ") };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure6 + response.meals[0].strIngredient6 + ";</div> ") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure7 + response.meals[0].strIngredient7 + ";</div> ") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure8 + response.meals[0].strIngredient8 + ";</div> ") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure9 + response.meals[0].strIngredient9 + ";</div> ") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure10 + response.meals[0].strIngredient10 + ";</div> ") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure11 + response.meals[0].strIngredient11 + ";</div> ") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure12 + response.meals[0].strIngredient12 + ";</div> ") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure13 + response.meals[0].strIngredient13 + ";</div> ") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure14 + response.meals[0].strIngredient14 + ";</div> ") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure15 + response.meals[0].strIngredient15 + ";</div> ") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure16 + response.meals[0].strIngredient16 + ";</div> ") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure17 + response.meals[0].strIngredient17 + ";</div> ") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure18 + response.meals[0].strIngredient18 + ";</div> ") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure19 + response.meals[0].strIngredient19 + ";</div> ") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure20 + response.meals[0].strIngredient20 + ";</div> ") };
    })

    // other recommended:
    var recommendURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchTerm;
    $.ajax({
      url: recommendURL,
      method: "GET"
    }).then(function (response) {
      $("#food-recommend").empty();
      if (response.meals.length > 1) {
        $("#food-recommend").html("<br><div class='wow fadeInRight'>Also Recommended:</div>")
        for (var i = 0; i < response.meals.length; i++) {
          $("#food-recommend").append("&star; " + response.meals[i].strMeal + "<br>");
        }
      }
    })
  });

  //==============================
  // Click Random Meal(Left side)
  //==============================
  $("#food-random-button").on("click", function () {
    $(".bg-gif").css("background-image", "url(assets/images/food.gif)")
    $("#left-side").css("background-image", "url(assets/images/31.jpg)")
    $("#right-side").css("background-image", "url(assets/images/31.jpg)")
    $(".video-play").empty();
    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {

      // left side changes:
      $(".food-photo-container").html('<img src="' + response.meals[0].strMealThumb + '" alt="" id="food-photo" class="wow fadeInLeft"></img>');
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>');

      //==============================
      // Click Video Button(in Random Page)
      //==============================
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID

      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".food-photo-container").empty();
        $(".video-play").html('<iframe width="80%" src="' + VideoLink + '" frameborder="0" allowfullscreen class="wow fadeInLeft"></iframe>');
      })

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append("<h4 class='wow fadeInRight'>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("<div class='wow fadeInRight'> Area: " + response.meals[0].strArea + "</div><br>");
      $("#food-results").append("<div class='wow fadeInRight'> Category: " + response.meals[0].strCategory + "</div><br>");
      $("#food-results").append("<div class='wow fadeInRight'> Instructions: <br> " + response.meals[0].strInstructions + "</div>");
      $("#food-results").append("<div class='wow fadeInRight'> <br> Ingredients:</div>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure1 + response.meals[0].strIngredient1 + ";</div> ") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure2 + response.meals[0].strIngredient2 + ";</div> ") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure3 + response.meals[0].strIngredient3 + ";</div> ") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure4 + response.meals[0].strIngredient4 + ";</div> ") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure5 + response.meals[0].strIngredient5 + ";</div> ") };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure6 + response.meals[0].strIngredient6 + ";</div> ") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure7 + response.meals[0].strIngredient7 + ";</div> ") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure8 + response.meals[0].strIngredient8 + ";</div> ") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure9 + response.meals[0].strIngredient9 + ";</div> ") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure10 + response.meals[0].strIngredient10 + ";</div> ") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure11 + response.meals[0].strIngredient11 + ";</div> ") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure12 + response.meals[0].strIngredient12 + ";</div> ") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure13 + response.meals[0].strIngredient13 + ";</div> ") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure14 + response.meals[0].strIngredient14 + ";</div> ") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure15 + response.meals[0].strIngredient15 + ";</div> ") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure16 + response.meals[0].strIngredient16 + ";</div> ") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure17 + response.meals[0].strIngredient17 + ";</div> ") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure18 + response.meals[0].strIngredient18 + ";</div> ") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure19 + response.meals[0].strIngredient19 + ";</div> ") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append("<div class='wow fadeInRight'> " + response.meals[0].strMeasure20 + response.meals[0].strIngredient20 + ";</div> ") };
    })
  });

  //===========================================↑↑ Meal ↑↑=========================================================================================================================
  //===========================================↓↓ Drink ↓↓========================================================================================================================

  //==============================
  // Click Search Drink(right side)
  //==============================
  $("#drink-search-button").on("click", function () {
    $(".bg-gif").css("background-image", "url(assets/images/drink.gif)")
    $("#left-side").css("background-image", "url(assets/images/31.jpg)")
    $("#right-side").css("background-image", "url(assets/images/31.jpg)")
    event.preventDefault();

    searchTerm = $("#drink-search").val();
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
    $.ajax({
      url: drinkQueryURL,
      method: "GET"
    }).then(function (response) {

      // right side changes:
      $(".drink-photo-container").html('<img src="' + response.drinks[0].strDrinkThumb + '" alt="" class="wow fadeInRight" id="drink-photo"></img>');

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4 class='wow fadeInLeft'>Drink: </br>" + response.drinks[0].strDrink + "</h4>");
      $("#drink-results").append("<div class='wow fadeInLeft'>Alcoholic: </br>" + response.drinks[0].strAlcoholic + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Glass type: </br>" + response.drinks[0].strGlass + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Instructions: </br> " + response.drinks[0].strInstructions + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Ingredients:</div>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1 + "<br></div>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + "<br></div>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + "<br></div>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4 + "<br></div>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5 + "<br></div>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6 + "<br></div>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7 + "<br></div>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure8 + response.drinks[0].strIngredient8 + "<br></div>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure9 + response.drinks[0].strIngredient9 + "<br></div>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure10 + response.drinks[0].strIngredient10 + "<br></div>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure11 + response.drinks[0].strIngredient11 + "<br></div>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure12 + response.drinks[0].strIngredient12 + "<br></div>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure13 + response.drinks[0].strIngredient13 + "<br></div>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure14 + response.drinks[0].strIngredient14 + "<br></div>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure15 + response.drinks[0].strIngredient15 + "<br></div>") };
      // other recommended:
      if (response.drinks.length > 1) {
        $("#drink-results").append("<br><div class='wow fadeInLeft'>Recommended:</div>")
        for (var i = 0; i < response.drinks.length; i++) {
          $("#drink-results").append("<div class='wow fadeInLeft'>&star; " + response.drinks[i].strDrink + "<br></div>");
        }
      }
    });
  });

  //==============================
  // Click Random Drink(right side)
  //==============================
  $("#drink-random-button").on("click", function () {
    $(".bg-gif").css("background-image", "url(assets/images/drink.gif)")
    $("#left-side").css("background-image", "url(assets/images/31.jpg)")
    $("#right-side").css("background-image", "url(assets/images/31.jpg)")

    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {

      // right side changes:
      $(".drink-photo-container").html('<img src="' + response.drinks[0].strDrinkThumb + '" alt="" class="wow fadeInRight" id="drink-photo"></img>');

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4 class='wow fadeInLeft'>Drink: </br>" + response.drinks[0].strDrink + "</h4>");
      $("#drink-results").append("<div class='wow fadeInLeft'>Alcoholic: </br>" + response.drinks[0].strAlcoholic + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Glass type: </br>" + response.drinks[0].strGlass + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Instructions: </br> " + response.drinks[0].strInstructions + "</div></br>");
      $("#drink-results").append("<div class='wow fadeInLeft'> Ingredients:</div>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1 + "<br></div>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + "<br></div>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + "<br></div>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure4 + response.drinks[0].strIngredient4 + "<br></div>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure5 + response.drinks[0].strIngredient5 + "<br></div>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure6 + response.drinks[0].strIngredient6 + "<br></div>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure7 + response.drinks[0].strIngredient7 + "<br></div>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure8 + response.drinks[0].strIngredient8 + "<br></div>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure9 + response.drinks[0].strIngredient9 + "<br></div>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure10 + response.drinks[0].strIngredient10 + "<br></div>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure11 + response.drinks[0].strIngredient11 + "<br></div>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure12 + response.drinks[0].strIngredient12 + "<br></div>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure13 + response.drinks[0].strIngredient13 + "<br></div>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure14 + response.drinks[0].strIngredient14 + "<br></div>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append("<div class='wow fadeInLeft'>" + response.drinks[0].strMeasure15 + response.drinks[0].strIngredient15 + "<br></div>") };
    });
  });

  //==============================
  // Click Sample Pictures
  //==============================
  // $(".sample-drink").on("click", function () {
    // $(".bg-gif").css("background-image", "url(assets/images/drink.gif)")
  // })
  // $(".sample-food").on("click", function () {
    // $(".bg-gif").css("background-image", "url(assets/images/food.gif)")
  // })

  //==============================
  // Click back to home button
  //==============================
  $(".home-button").on("click", function () {
    location.reload();
  });
})