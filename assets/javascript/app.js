$("#dog-button").on("click", function (event) {
    event.preventDefault();
    // code clear input cell
    // var zipcode = $("#zipcode-input").val().trim();
    // var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=" + zipcode;
    var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&count=3&location=44236";
    $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        method: "GET"
    }).then(function (response) {
        var results = response.petfinder.pets.pet;
        for (var i = 0; i < results.length; i++) {
            var dogDiv = $("<div>");
            dogDiv.attr("class", "dog-card card");
            var dogImage = $("<img>");
            dogImage.attr("src", results[i].media.photos.photo[1].$t)
            dogImage.attr("class", "card-img-top");
            var name = $("<p>").text(results[i].name.$t);
            name.attr("class", "card-title");
            dogDiv.append(dogImage);
            dogDiv.append(name);
            // console.log(results[i].name.$t);
            // console.log(results[i].media.photos.photo[1].$t);
            if (results[i].breeds.breed.length > 0) {
                for (var j = 0; j < results[i].breeds.breed.length; j++) {
                    // console.log(results[i].breeds.breed[1].$t);
                    var breed = $("<p>").text(results[i].breeds.breed[j].$t);
                    breed.attr("class", "card-text");
                    dogDiv.append(breed);
                }
            }
            else {
                var breed = $("<p>").text(results[i].breeds.breed.$t);
                breed.attr("class", "card-text");
                dogDiv.append(breed);
            }
            var dogButton = $("<button>");
            dogButton.text("Learn more");
            dogDiv.append(dogButton);
            $(".dogs").append(dogDiv);
        };
    });
});


$("button").on("click", function (event) {
    event.preventDefault();

    $.ajax({
        url: "https://api.thedogapi.com/v1/images/search?api_key=724f63ac-650f-4b09-a78e-1c906fd4ca35&limit=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
})

function displayBreed() {

    $.ajax({
        url: "https://api.thedogapi.com/v1/breeds/2?api_key=724f63ac-650f-4b09-a78e-1c906fd4ca35&limit=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}

function clearInfo() {
    $("").attr("src", "");
    $("").remove()
}
