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
		var $listHtml = ("<li class='item'><span class='box unchecked'><i class='fa fa-square'></i></span> " + $listItem + "<span class='delete'><i class='fa fa-times'></i></span></li>" );
			event.preventDefault();
			if ($listItem.trim().length == 0){
				alert("Enter something in the textbox");
				}
			else {
				$('.shopping-list').append($listHtml);
				$('.item-input').val("");
			};
		}); 

	

	//if this list itme checked change state list class to checked
	$('.unchecked').click(function (){
		console.log('unchecked box clicked');
		//toggle li class to checked 
		//change i class to <i class="fa fa-check-square"></i>
	});

	//if delete remove this list item
	$('.delete').click(function(){
		console.log('delete clicked');
		//delete this.li.remove();
		$
	});

	//reset click button class="list-reset"
	$('.list-reset').click(function(){
		console.log('list reset clicked');
		//clear shopping-list.remove()
	});

	//email click  button class="email"
	$('.email').click(function() {
		//check if input[type=email] valid email
		//send webpage to email
		console.log('email clicked');

	});


})
