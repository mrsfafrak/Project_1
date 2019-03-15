$("#dog-button").on("click", function (event) {
    event.preventDefault();
    // code clear input cell
    var zipcode = $("#zipcode").val().trim();
    var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=" + zipcode;
    // var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&count=3&location=44236";
    $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        method: "GET"
    }).then(function (response) {
        console.log(response);
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
        var breedArr=[];
            if (results[i].breeds.breed.length > 0) {
                for (var j = 0; j < results[i].breeds.breed.length; j++) {
                    var breed = $("<p>").text(results[i].breeds.breed[j].$t);
                    breed.attr("class", "card-text");
                    dogDiv.append(breed);
                    breedArr.push(results[i].breeds.breed[j].$t);
                    console.log("breed array:"+breedArr);

                }
            }
            else {
                var breed = $("<p>").text(results[i].breeds.breed.$t);
                breed.attr("class", "card-text");
                dogDiv.append(breed);
            }
            var dogButton = $("<button>");
            dogButton.attr("class", "breed-button");
            // $(this).data({breed: breedArr});

            // dogButton.attr("class",breedArr[0]);
            dogButton.text("Learn more");
            dogDiv.append(dogButton);

            $(".vertical-menu1").append(dogDiv);
        };
    });
});

$(document).on("click", ".breed-button", function (event) {
    event.preventDefault();
// console.log($(this).parent());
    // var breed = $(this).val();
    // console.log(breed);

    // var queryURL = "https://api.thedogapi.com/v1/breeds/search?x-api-key=724f63ac-650f-4b09-a78e-1c906fd4ca35&q="+breed;
    var queryURL = "https://api.thedogapi.com/v1/breeds/search?x-api-key=724f63ac-650f-4b09-a78e-1c906fd4ca35&q=terrier"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            var dogCont = $("<div>");
            dogCont.attr("class", "card");

            var name = $("<p>").text("Breed: " + response[i].name);
            name.attr("class", "card-title");
            dogCont.append(name);

            var weight = $("<p>").text("weight: " + response[i].weight.imperial + " lbs");
            weight.attr("class", "card-text");
            dogCont.append(weight);

            var height = $("<p>").text("height: " + response[i].height.imperial + " inches");
            height.attr("class", "card-text");
            dogCont.append(height);

            var lifespan = $("<p>").text("life span: " + response[i].life_span + " years");
            lifespan.attr("class", "card-text");
            dogCont.append(lifespan);

            $(".vertical-menu2").append(dogCont);
        };
    });
})



