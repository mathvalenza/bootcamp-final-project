$("#get-all").click(function() {
    $.getJSON("https://swapi.co/api/people", function(data, status){
        var items = [];
        console.log(data);
        $.each( data["results"], function( key, val ) {
			items.push( "<li id='" + key + "'>" + "(" + val["url"] + ")" + val["name"] + "</li>" );
		});

		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "body" );
    });
});

$("#get-by-id").click(function() {
	var randomId = Math.floor((Math.random() * 87) + 1);

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){
        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    });
});

$("#question-1").click(function() {
	var randomId = Math.floor((Math.random() * 87) + 1);

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").empty();
				$("#answer").remove();
				$("#question").append(`1 - Qual a cor dos olhos de <b>${val}</b> ?`);
    			$("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
			}

			if (key === "eye_color") {
				localStorage.setItem("correctAnswer", val);
			}
		});
    }); 

    localStorage.setItem("question", 1);

});

function question2() {
	var randomId = Math.floor((Math.random() * 87) + 1);

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`2 - Qual a altura (cm) de <b>${val}</b> ?`);
    			$("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
			}

			if (key === "height") {
				localStorage.setItem("correctAnswer", val);
			}
		});
    }); 
};

function question3() {
	var randomId = Math.floor((Math.random() * 61) + 1);
	var correctAnswer = null;
	var optionsAnswer = [0, 0, 0, 0];

    $.getJSON(`https://swapi.co/api/planets/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`3 - Quantas horas tem o dia de <b>${val}</b> ?`);
			}

			if (key === "rotation_period") {
				if (val === "unknown") {
					$("#question").empty();
				    $("#answer").remove();
				    $("#radio-answers").remove();
				    $("#feedback").remove();
				    question3();

				    return;
				}

				localStorage.setItem("correctAnswer", val);
				correctAnswer = val;

				var randomIndex = Math.floor(Math.random() * optionsAnswer.length + 1);
				console.log("randomIndex: ", randomIndex);

				for (var i=0; i<optionsAnswer.length; i++) {
					if (i === randomIndex) {
						optionsAnswer[i] = val;
					} else {

						var newNumber = 0;
						var count = 0;

						while (count < 10) {
							moreOrMinus = Number(Math.floor((Math.random() * 2)));
							if (moreOrMinus === 0) {
								newNumber = Number(correctAnswer) + Number(Math.floor((Math.random() * 10)));
							} else {
								newNumber = Number(correctAnswer) - Number(Math.floor((Math.random() * 10)));
							}

							if (!optionsAnswer.includes(newNumber)) {
								break;
							} else {
								count++;
							}
						}
						optionsAnswer[i] = newNumber;
					}
				}
				writeOptions(optionsAnswer);
			}
		});
    }); 
};

function writeOptions(optionsAnswer) {
    $("#form").append(`<div class="control" id="radio-answers">
	  <label class="radio">
	    <input type="radio" name="answer" value="${optionsAnswer[0]}">
	    ${optionsAnswer[0]}
	  </label>
	  <label class="radio">
	    <input type="radio" name="answer" value="${optionsAnswer[1]}">
	    ${optionsAnswer[1]}
	  </label>
	  <label class="radio">
	    <input type="radio" name="answer" value="${optionsAnswer[2]}"">
	    ${optionsAnswer[2]}
	  </label>
	  <label class="radio">
	    <input type="radio" name="answer" value="${optionsAnswer[3]}">
	    ${optionsAnswer[3]}
	  </label>
	</div>`);
}

function question4() {
	var randomId = Math.floor((Math.random() * 61) + 1);

	var correctAnswer = null;
	var optionsAnswer = [0, 0, 0, 0];

    $.getJSON(`https://swapi.co/api/planets/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`4 - Quantas pessoas há em ${val} ?`);
			}

			if (key === "population") {
				if (val === "unknown") {
					$("#question").empty();
				    $("#answer").remove();
				    $("#radio-answers").remove();
				    $("#feedback").remove();
				    question4();

				    return;
				}

				localStorage.setItem("correctAnswer", val);

				correctAnswer = val;

				var randomIndex = Math.floor(Math.random() * optionsAnswer.length + 1);
				console.log("randomIndex: ", randomIndex);

				for (var i=0; i<optionsAnswer.length; i++) {
					if (i === randomIndex) {
						optionsAnswer[i] = val;
					} else {

						var newNumber = 0;
						var count = 0;

						while (count < 10) {
							moreOrMinus = Number(Math.floor((Math.random() * 2)));
							if (moreOrMinus === 0) {
								newNumber = Number(correctAnswer) + Number(Math.floor((Math.random() * 10)));
							} else {
								newNumber = Number(correctAnswer) - Number(Math.floor((Math.random() * 10)));
							}

							if (!optionsAnswer.includes(newNumber)) {
								break;
							} else {
								count++;
							}
						}
						optionsAnswer[i] = newNumber;
					}
				}
				writeOptions(optionsAnswer);
			}
		});
    }); 

};

function question5() {
	var randomId = Math.floor((Math.random() * 87) + 1);

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`5 - Qual o nome do personagem abaixo?`);
				localStorage.setItem("correctAnswer", val);
				getUrlImage(val);
    			$("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
			}
		});
    }); 

};

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
            $("#image").append("<img src="+return_img+" width=200px height=200px>");
        }
    });
    request.send();
}

$("#submit").click(function(event) {
	console.log("submit: ", $( "#answer" ));
	console.log('localStorage.getItem("question"): ', localStorage.getItem("question"));

	if (localStorage.getItem("question") == 3 || localStorage.getItem("question") == 4) {
		submitRadio(event);
	} else {
		if ( $("#answer" ).val() == localStorage.getItem("correctAnswer") ) {
		    positiveFeedback();
	  	} else {
	  		negativeFeedback();
	  	}
	    return;
	  }
 
	event.preventDefault();
});

function submitRadio(event) {
	console.log("submit: ", $( "#answer" ));
	var selValue = $('input[name=answer]:checked').val(); 

	console.log('selValue: ', selValue);
   	
   	if (selValue == localStorage.getItem("correctAnswer")) {
	    positiveFeedback();
	    return;
  	} else {
		negativeFeedback();
  	}
 
	event.preventDefault();
};

function thanks() {
	$("#question").append(`That's all, folks. Thank you!`);
};

function positiveFeedback() {
	console.log("ACERTÔ MIZERAVI");
	$("#feedback").remove();
	$("#form").append('<h2 class="has-text-success" id="feedback">Great!</h2>');
    $('#answer').removeClass('is-danger').addClass('is-success');
}

function negativeFeedback() {
	console.log("ERRRRRRROU!");
	$("#feedback").remove();
	$("#form").append('<h2 class="has-text-danger" id="feedback">Try it again!</h2>');
	$('#answer').addClass('is-danger');
}

$("#next").click(function(event) {
	var question = localStorage.getItem("question");

	question++;
    localStorage.setItem("question", question);
    $("#question").empty();
    $("#answer").remove();
    $("#radio-answers").remove();
    $("#feedback").remove();
    console.log(":>> question: ", localStorage.getItem("question"));
    switch(question) {
	    case 2:
	        question2();
	        break;
	    case 3:
	        question3();
	        break;
	    case 4:
	        question4();
	        break;
	    case 5:
	        question5();
	        break;
	    case 6:
	        thanks();
	        break;
	    default:
	        question1();
	}
});
