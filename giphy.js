// array of animated series

var animatedSeries = ["Rick and Morty", "Big Mouth", "Bo Jack Horeman", "One Punch Man", "South Park", "Red vs Blue", "Castlevania", "Fate Apocrypha"];

// api key for giphy sLSjZUESfu4Ubt5BP9s55TNsO03yb5O0 visit: https://developers.giphy.com/dashboard/

// render animated series buttons
function renderSeries () {
    $("buttons").empty();

    for (i = 0; i < animatedSeries.length; i++){
        var btn = $("<button>");
        btn.addClass("btn btn-outline-dark");
        btn.attr("type", "button");
        btn.attr("data-animated", animatedSeries[i]);
        btn.text(animatedSeries[i]);
        $("buttons").append(btn);
    }
};

// add click event on buttons

$("button").on("click", function () {

});

renderSeries ();