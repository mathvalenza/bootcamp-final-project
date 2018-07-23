$("#get-btn").click(function(){
    $.getJSON("https://swapi.co/api/people", function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        var items = [];
        $.each( data, function( key, val ) {
			console.log(key, val);
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});

		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "body" );
    });
});