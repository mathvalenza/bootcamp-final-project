$("#request-image").click(function() {
    let request = new XMLHttpRequest();
    let url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=darth";
    let key = "fe69342813854c00b235c9ac7f12cefb";

    request.open("GET", url);
    request.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    request.setRequestHeader("Accept", "application/json");

    request.addEventListener("load", function(){
        if (this.status === 200) {
            console.log("returnGet");
            let json = this.responseText.trim();
            let collection = JSON.parse(json);
            console.log(collection["value"][0]["contentUrl"]);
        }
    });
    
    request.send();

    return console.log("endFunction");
});

