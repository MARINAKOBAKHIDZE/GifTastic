$(document).ready(function(){
   
    $("#dogs").on("click", function(){
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=dog&api_key=RxZtIt2Ede18zGcy4gBa5nSxsusUM3LB&limit=5",
            method: "GET"
        }).then(function(response){
            //loop over response.data
            //add an image tag
            for (var i = 0; i<response.data; i++);
            var gifObject = response.data[0];
            console.log(gifObject.embed_url);
        }) 
    });
});
    
    
//figure out a way to change the qx
// how to add other peramiters to url
//rating

