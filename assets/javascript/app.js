var noDogZip = $("<p>").text("No zipcode entered yet. That's okay, just plug in your zipcode above!");
$(".vertical-menu1").append(noDogZip);
// on click event for get doggies button
$("#dog-button").on("click", function (event) {
    $(".zipcode").empty();
    // prevent page from reloading
    event.preventDefault();
    // clear anything in div 
    $(".vertical-menu1").empty();
    // get zip code
    var zipcode = $("#zipcode").val().trim();
    // ZIPCODE VALIDATION 
   
    // clear zip code field
    $("#zipcode").val("");
    // ajax call to petfinder api
    var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=" + zipcode;
    $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        method: "GET"
    }).then(function (response) {
        // if no dog come back on search
        if (typeof response.petfinder.pets == "undefined") {
            var noDogMessage = $("<p>").text("No doggies available for that entry.");
            $(".vertical-menu1").append(noDogMessage);
        } else {
            // if dogs are available for adoption
            var results = response.petfinder.pets.pet;
            // loop through array of adoptable dogs
            for (var i = 0; i < results.length; i++) {
                // create new dog card/div
                var dogDiv = $("<div>");
                dogDiv.attr("class", "dog-card card");
                // if no image exists on petfinder
                if (jQuery.isEmptyObject(results[i].media)) {
                    var dogImage = $("<img>");
                    dogImage.attr("alt", "Sorry, no images available; however, we are sure this doggie is probably cute")
                    dogImage.attr("class", "card-img-top");
                    dogDiv.append(dogImage);
                } else {
                    // if image exists, add first image associated with dog to card
                    var dogImage = $("<img>");
                    dogImage.attr("src", results[i].media.photos.photo[1].$t)
                    dogImage.attr("class", "card-img-top");
                    dogDiv.append(dogImage);
                };
                // add name of dog to card
                var name = $("<p>").text(results[i].name.$t);
                name.attr("class", "card-title");
                dogDiv.append(name);
                // add breed(s) to card with this if/else statement
                if (results[i].breeds.breed.length > 0) {
                    for (var j = 0; j < results[i].breeds.breed.length; j++) {
                        var breed = $("<p>").text(results[i].breeds.breed[j].$t);
                        breed.attr("class", "card-text");
                        dogDiv.append(breed);
                        var dogButton = $("<button>");
                        dogButton.attr("class", "breed-button");
                        dogButton.attr("id", results[i].breeds.breed[j].$t);
                        dogButton.text("Learn more");
                        dogDiv.append(dogButton);
                    }
                }
                else {
                    var breed = $("<p>").text(results[i].breeds.breed.$t);
                    breed.attr("class", "card-text");
                    dogDiv.append(breed);
                    var dogButton = $("<button>");
                    dogButton.attr("class", "breed-button");
                    dogButton.attr("id", results[i].breeds.breed.$t);
                    dogButton.text("Learn more");
                    dogDiv.append(dogButton);
                }
                // append completed dog card to page
                $(".vertical-menu1").append(dogDiv);
            };
        };
    });
};
});
// on click event for dynamically created breed buttons
$(document).on("click", ".breed-button", function (event) {
    // prevent page from reloading
    event.preventDefault();
    // clear anything in div 
    $(".vertical-menu2").empty();
    // get id for this breed button clicked, breed name is stored in id for button
    var breed = $(this).attr("id");
    // statement to account for mixed breed scenerio 
    if (breed === "Mixed Breed") {
        var mixedMessage = $("<p>").text("This adorable furry friend doesn't have specific info as they are described as being a mixed breed. Doesn't matter though because they'll love you unconditionally!")
        $(".vertical-menu2").append(mixedMessage);
    } else {
        // ajax call for breed search on dog api
        var queryURL = "https://api.thedogapi.com/v1/breeds/search?x-api-key=724f63ac-650f-4b09-a78e-1c906fd4ca35&q=" + breed;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // if no breed info exists or in unsearchable format
            if (response == "") {
                var noInfoMessage = $("<p>").text("No info available for this breed search. Try another breed from a dog above.");
                $(".vertical-menu2").append(noInfoMessage);
            }
            else {
                // loop through array of associated breed results
                for (var i = 0; i < response.length; i++) {
                    var dogCont = $("<div>");
                    dogCont.attr("class", "card");
                    // adds breed name to card
                    var name = $("<p>").text("Breed: " + response[i].name);
                    name.attr("class", "card-title");
                    dogCont.append(name);
                    // adds weight to card
                    var weight = $("<p>").text("weight: " + response[i].weight.imperial + " lbs");
                    weight.attr("class", "card-text");
                    dogCont.append(weight);
                    // adds height to card
                    var height = $("<p>").text("height: " + response[i].height.imperial + " inches");
                    height.attr("class", "card-text");
                    dogCont.append(height);
                    // adds lifespan to card
                    var lifespan = $("<p>").text("life span: " + response[i].life_span);
                    lifespan.attr("class", "card-text");
                    dogCont.append(lifespan);
                    // append breed card to page
                    $(".vertical-menu2").append(dogCont);
                };
            }
        });
    };
});



