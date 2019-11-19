// When size is submitted by the user, call makeGrid()
$(document).ready(function(){

/* form input */
/* grid generation based on user input */
/* add grid parametter  */
$('#sizePicker').submit(function makeGrid(grid){
	/* clear table  */
	$('table tr').remove();
	var rows =$('#inputHeight').val();
	var cols = $('#inputWeight').val();
	for( var j=1; j<=rows; j++){
		$('table').append('<tr></tr>');
		for(var k=1; k<=cols ;k++){
			$('tr:last').append('<td></td>');
			/* class for each td */ /* class name is cell */
			$('td').attr("class", 'cell');
		}
	}
	/* return grid parametter */
	/* To make the cells appear and not disappear quickly*/
	grid.preventDefault();
	/* click on cell class to get color */
	$('.cell').click(function(event){
		var paint = $('#colorPicker').val();
		/* change bgcolor */
		$(event.target).css('background-color' , paint);
	});
});

});