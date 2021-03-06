$(document).ready(function(){

	console.log('js loaded!');
	
	$(document).keydown(function( event ){
		if (event.which == 13){
			event.preventDefault();
			console.log('enter key pressed');
			//call click function
			$('.item-submit').click();
			};
	});

	$('.item-submit').click(function( event ) {
		/*  variables: input val and <li> */
		var $listItem = $('.item-input').val();
		var $listHtml = ("<li class='item'><span class='box unchecked'><i class='fa fa-square'></i></span>" + $listItem + "<span class='delete'><i class='fa fa-times'></i></span></li>" );
			event.preventDefault();
			if ($listItem.trim().length == 0){
				console.log("Enter something in the textbox");
				$('.message-no-content').css('display', 'block');
				}
			else {
				$('.shopping-list').append($listHtml);
				$('.item-input').val("");
				$('.message-no-content').css('display', 'none');
			};
		}); 

	
	//if this list itme checked, list class to checked, change icon to
	$('ul').on('click', '.unchecked', function(event){
		console.log('checked off');
		event.preventDefault();
		//$(this).removeClass("unchecked").addClass("checked");
		$(this).parent('li').toggleClass("checked", 600);
		$(this).children('i').toggleClass("fa-check-square", 600);
	});

	//if x is clicked remove this list item
	$('ul').on('click', '.delete', function(event){
		console.log('delete clicked');
		event.preventDefault();
		$(this).parent().remove();
	});

	//reset click button class="list-reset"
	$('button').on('click', '.list-reset', function(event){
		console.log('reset button clicked');
		event.preventDefault();
		$('.shopping-list').children().remove();
	});
	//print list
	$('.print').click(function() {
		console.log('print clicked');
		window.print(); 
	});

	//email click  button class="email"
	/*
	$('.email').click(function() {
		//check if input[type=email] valid email
		//send webpage to email
		console.log('email clicked');

	});
	*/


})
