//https://docs.microsoft.com/en-us/azure/cognitive-services/bing
let subscriptionKey = 'fe69342813854c00b235c9ac7f12cefb';
let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';
let term = 'darth vadder';

let bing_image_search = function (search) {
    console.log('Searching images for: ' + term);
    let request_params = {
          method : 'GET',
          hostname : host,
          path : path + '?q=' + encodeURIComponent(search),
          headers : {
              'Ocp-Apim-Subscription-Key' : subscriptionKey,
          }
      };
  
      let req = https.request(request_params, response_handler);
      req.end();
  }

