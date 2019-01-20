$(document).ready(function () {

    $("#dogs").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=dog&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {

                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
            }
        })
    });

    $("#cats").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=cat&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
            }

        })
    });

    $("#fishes").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=fish&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
                //     var gifObject = response.date[0];
                // console.log(gifObject.embed_url);
            }
        })
    });
    $("#snakes").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=snake&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
            }
        })
    });
    $("#horses").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=horse&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
            }
        })
    });
    $("#monkeys").on("click", function () {
        $(".allImages").empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=monkey&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                $(".allImages").append("<img src=" + response.data[i].images.fixed_height.url + ">")
            }
        })
    });

});