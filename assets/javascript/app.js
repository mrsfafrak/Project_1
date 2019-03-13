<<<<<<< HEAD
function displayDog() {

    $.ajax({
        url: "https://api.thedogapi.com/v1/images/search?api_key=724f63ac-650f-4b09-a78e-1c906fd4ca35&limit=10",
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });
    $("button").on("click", function(event){
    event.preventDefault();
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
=======
// petfinder notes:
// https://api.petfinder.com/pet.find?key=129bc9340b07c13a3cae63a8fd9f07e6&format=json&animal=dog&location=44236
$("button").on("click", function(event){
    event.preventDefault();
    // clear input cells
    var queryURL
})
>>>>>>> d43e88be8dc8fd4083e654fe0b53bd482e09b5e8
