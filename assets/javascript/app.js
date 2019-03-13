$("#dog-button").on("click", function (event) {
    event.preventDefault();
    // code clear input cells
    // var zipcode = $("#zipcode-input").val().trim();
    // var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=" + zipcode;
    var queryURL = "https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=44236";
    $.ajax({
        url:queryURL,
        dataType: 'jsonp',
        method: "GET"
    }).then(function(response){
        // console.log(response);
        var results =response.petfinder.pets.pet;
        // console.log(results);
        for (var i=0;i<results.length;i++){
            console.log(results[i].name.$t);
            console.log(results[i].media.photos.photo[1].$t);
            for (var j =0; j<results[i].breeds.breed.length;j++){
            console.log(results[i].breeds.breed[1].$t);
            }
        };
    });
});
$("button").on("click", function(event){
    event.preventDefault();

    $.ajax({
        url: "https://api.thedogapi.com/v1/images/search?api_key=724f63ac-650f-4b09-a78e-1c906fd4ca35&limit=10",
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });
    }

function displayBreed() {

    $.ajax({
        url: "https://api.thedogapi.com/v1/breeds/2?api_key=724f63ac-650f-4b09-a78e-1c906fd4ca35&limit=10",
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });
    }

function clearInfo() {
    $("").attr("src", "");
    $("").remove()
}
