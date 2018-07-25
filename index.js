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
				$("#question").append(`1 - Qual a cor dos olhos de ${val} ?`);
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
				$("#question").append(`2 - Qual a altura (cm) de ${val} ?`);
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
				$("#question").append(`3 - Qual o peso (kg) de ${val} ?`);
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
				$("#question").append(`4 - Quantas horas tem o dia de ${val} ?`);
			}

			if (key === "rotation_period") {
				localStorage.setItem("correctAnswer", val);
				correctAnswer = val;

				var randomIndex = Math.floor	(Math.random() * optionsAnswer.length + 1);

				for (var i=0; i<optionsAnswer.length; i++) {
					if (i === randomIndex) {
						optionsAnswer[i] = correctAnswer;
					} else {
						moreOrMinus = Number(Math.floor((Math.random() * 2)));

						if (moreOrMinus === 0) {
							newNumber = Number(correctAnswer) + Number(Math.floor((Math.random() * 10)));
						} else {
							newNumber = Number(correctAnswer) - Number(Math.floor((Math.random() * 10)));
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
		    <input type="radio" name="answer">
		    ${optionsAnswer[0]}
		  </label>
		  <label class="radio">
		    <input type="radio" name="answer">
		    ${optionsAnswer[1]}
		  </label>
		  <label class="radio">
		    <input type="radio" name="answer">
		    ${optionsAnswer[2]}
		  </label>
		  <label class="radio">
		    <input type="radio" name="answer">
		    ${optionsAnswer[3]}
		  </label>
		</div>`);
    }); 

    // $("#form").append('<input class="input is-2" id="answer" type="text" placeholder="Text input">');
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

$("#submit").click(function(event)	 {
	console.log("submit: ", $( "#answer" ));
	if ( $("#answer" ).val() == localStorage.getItem("correctAnswer") ) {
	    console.log("ACERTÔ MIZERAVI");
	    return;
  	}
 
	event.preventDefault();
	console.log("ERRRRRRROU!");
});
