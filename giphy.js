// array of animated series

var animatedSeries = ["Rick and Morty", "Big Mouth", "BoJack Horseman", "One Punch Man", "South Park", "Red vs Blue", "Castlevania", "Fate/Apocrypha"];

// api key for giphy sLSjZUESfu4Ubt5BP9s55TNsO03yb5O0 visit: https://developers.giphy.com/dashboard/

// render animated series buttons
function renderSeries () {
    $("#buttons").empty();

    for (i = 0; i < animatedSeries.length; i++){
        var btn = $("<button>");
        btn.addClass("btn btn-outline-dark");
        btn.attr("id", "Aseries");
        btn.attr("type", "button");
        btn.attr("data-animated", animatedSeries[i]);
        btn.text(animatedSeries[i]);
        $("#buttons").append(btn);
    }
};

// Adding a click event listener to all buttons
$(document).on("click", "#Aseries", displaySeries);

// render on the HTML the information and GIF about the series

function displaySeries () {
var seriesValue = $(this).attr("data-animated");
var API = "&api_key=sLSjZUESfu4Ubt5BP9s55TNsO03yb5O0"
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +seriesValue+API;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(queryURL);
    console.log(response);

// storing the data from the AJAX request in the results variable
var ajaxResponse = response.data;
console.log(ajaxResponse);

for (var i = 0; i < 10; i++) {
    var seriesGIF = $("<div>");
    var rating = $("<p>").text("Rating: "+ajaxResponse[i].rating);
    console.log(rating);
    var title = $("<p>").text("Title: "+ajaxResponse[i].title);
    var GIF = $("<img>");
    GIF.attr("src", ajaxResponse[i].images["480w_still"].url);
    GIF.attr("id", "gif");
    GIF.attr("data-state", "still");
    GIF.attr("data-still", ajaxResponse[i].images["480w_still"].url);
    GIF.attr("data-animate", ajaxResponse[i].images.fixed_height.url);
    console.log(GIF);
    seriesGIF.append(rating);
    seriesGIF.append(title);
    seriesGIF.append(GIF);
    console.log(seriesGIF);

    $("#load-gif").prepend(seriesGIF);

    // still GIF's and move on click
$("#gif").on("click", function(){
var state = $(this).attr("data-state");

if (state == "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
} else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}
});
};
});
};

// add new buttons and GIF's

$("#add-gif").on("click", function(event){
    event.preventDefault();
    
    var newGIF = $("#gif-input").val().trim();
    
    animatedSeries.push(newGIF);
    renderSeries ();
});


renderSeries ();