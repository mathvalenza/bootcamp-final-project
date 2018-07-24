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
				$("#question").append(`Qual a cor dos olhos de ${val} ?`);
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

$("#submit").click(function(event)	 {
	console.log("submit: ", $( "#answer" ));
	if ( $( "#answer" ).val() === localStorage.getItem("correctAnswer") ) {
	    console.log("brown");
	    return;
  	}
 
	event.preventDefault();
	console.log("not brown");
});
