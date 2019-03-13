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
