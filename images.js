$("#request-image").click(function() {
    getUrlImage('Ben Quadinaros');
});

function getUrlImage(image){
    let request = new XMLHttpRequest();
    let url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + image;
    let key = "fe69342813854c00b235c9ac7f12cefb";

    request.open("GET", url);
    request.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    request.setRequestHeader("Accept", "application/json");

    request.addEventListener("load", function(){
        if (this.status === 200) {
            let json = this.responseText.trim();
            let collection = JSON.parse(json);
            let return_img = collection["value"][0]["contentUrl"];
            $("#image").append("<img src="+return_img+" width=500px height=500px>");
        }
    });
    request.send();
}