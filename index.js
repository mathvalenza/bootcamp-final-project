$("#get-all").click(function() {
    $.getJSON("https://swapi.co/api/people", function(data, status){
        // console.log("Data: " + data + "\nStatus: " + status);
        var items = [];
        console.log(data);
        $.each( data["results"], function( key, val ) {
			console.log(key, val);
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
        // console.log("Data: " + data + "\nStatus: " + status);
        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
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

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`1 - Qual a cor dos olhos de <b>${val}</b> ?`);
			}

			if (key === "eye_color") {
				localStorage.setItem("correctAnswer", val);
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    }); 

    $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
});

$("#question-2").click(function() {
	var randomId = Math.floor((Math.random() * 87) + 1);

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`2 - Qual a altura (cm) de <b>${val}</b> ?`);
			}

			if (key === "height") {
				localStorage.setItem("correctAnswer", val);
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    }); 

    $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
});

$("#question-3").click(function() {
	var randomId = Math.floor((Math.random() * 87) + 1);

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/people/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`3 - Qual o peso (kg) de <b>${val}</b> ?`);
			}

			if (key === "mass") {
				localStorage.setItem("correctAnswer", val);
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    }); 

    $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
});

$("#question-4").click(function() {
	var randomId = Math.floor((Math.random() * 61) + 1);
	var correctAnswer = null;
	var optionsAnswer = [0, 0, 0, 0];

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/planets/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`4 - Quantas horas tem o dia de <b>${val}</b> ?`);
			}

			if (key === "rotation_period") {
				localStorage.setItem("correctAnswer", val);
				correctAnswer = val;

				var randomIndex = Math.floor(Math.random() * optionsAnswer.length + 1);
				console.log("randomIndex: ", randomIndex);

				for (var i=0; i<optionsAnswer.length; i++) {
					if (i === randomIndex) {
						optionsAnswer[i] = val;
					} else {

						var newNumber = 0;

						while (optionsAnswer.includes(newNumber)) {
							moreOrMinus = Number(Math.floor((Math.random() * 2)));
							if (moreOrMinus === 0) {
								newNumber = Number(correctAnswer) + Number(Math.floor((Math.random() * 10)));
							} else {
								newNumber = Number(correctAnswer) - Number(Math.floor((Math.random() * 10)));
							}
						
						}
						optionsAnswer[i] = newNumber;
					}
				}
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
	    $("#form").append(`<div class="control">
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
    }); 
});

$("#question-5").click(function() {
	var randomId = Math.floor((Math.random() * 61) + 1);

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/planets/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			if (key === "name") {
				$("#question").append(`5 - Quantas pessoas há em ${val} ?`);
			}

			if (key === "population") {
				localStorage.setItem("correctAnswer", val);
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    }); 

    $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
});

$("#question-6").click(function() {
	var randomId = Math.floor((Math.random() * 61) + 1);

	console.log(randomId);
	console.log("generate-question");

    $.getJSON(`https://swapi.co/api/planets/${randomId}`, function(data, status){

        var items = [];
        console.log(data);
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + key + ": " + val + "</li>" );

			$("#question").append(`6 - Qual o nome do personagem abaixo?`);
			if (key === "name") {
				localStorage.setItem("correctAnswer", val);
			}
		});

		$( "<ul/>", {
			"class": "section",
			html: items.join( "" )
		}).appendTo( "body" );
    }); 

    $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
});

$("#submit").click(function(event)	 {
	console.log("submit: ", $( "#answer" ));
	if ( $("#answer" ).val() == localStorage.getItem("correctAnswer") ) {
	    console.log("ACERTÔ MIZERAVI");
	    return;
  	}
 
	event.preventDefault();
	console.log("ERRRRRRROU!");
});

$("#submit-radio").click(function(event)	 {
	console.log("submit: ", $( "#answer" ));
	var selValue = $('input[name=answer]:checked').val(); 

	console.log('selValue: ', selValue);
   	
   	if (selValue == localStorage.getItem("correctAnswer")) {
	    console.log("ACERTÔ MIZERAVI");
	    return;
  	}
 
	event.preventDefault();
	console.log("ERRRRRRROU!");
});
