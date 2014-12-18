<form action="#" method="post" id="endpointSubmit">
	<input type="hidden" name="_METHOD" value="PUT">
	<div>
		<label for="textarea">Post:</label>
		<textarea cols="40" rows="8" name="post" id="post"></textarea>
	</div>
	 
 	<div>
		<label for="select-choice">Select Category:</label>
		<select name="category" id="category">
			<option value="FMYLIFE">F MY LIFE</option>
			<option value="stwrldprbl">First World Problems</option>
			<option value="justcase">Just Because</option>
		</select>
	</div> 
	<div>
	    <input type="submit" value="submit" name="submit"/>
    </div>
</form>

<script src="js/jquery.js"></script>

<script>

$("#endpointSubmit").submit(function() { addPost();

});

function addPost() {
    console.log('addWine');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://wwww.thanos.pandora.dev/dev/endpoints.php/add", 
        dataType: "json",
        data: formToJSON(), 
        beforeSend: function(){
        	console.log(formToJSON());
        },
        success: function(data, textStatus, jqXHR){
            console.log(' created successfully');
             
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(' error: ' + textStatus);
        }
    });
}
 function formToJSON() {
    return JSON.stringify({
        "post": $('#post').val(),
        "category": $('#category').val()
        });
}


 
</script>