var player1 = prompt("Player 1 please enter your name = ")
var player2 = prompt("Player 2 please enter your name = ")

var grab_table_cells = $('td')

var table_design = {
					'border' : '5px solid yellow' ,
					'height' : '75px' ,
					'width'  : '75px' ,
					'background-color' : 'black',
					'border-radius' : '15px'
}

grab_table_cells.css(table_design)

$('td').mouseenter(function(){ $(this).css('border' , '5px solid red') ;})
$('td').mouseleave(function(){ $(this).css('border' , '5px solid yellow') ;})

var colDeciderNum = 0 ;

$('td').click(function(){
	if($(this).css('background-color') == "rgb(0, 0, 0)")
	{
		if(colDeciderNum%2 == 0)
		{
			$(this).css('background-color','rgb(254,89,21)')		
		}
		else
		{
			$(this).css('background-color','#39ff14')
		}
		colDeciderNum = colDeciderNum+1 
	}
})



