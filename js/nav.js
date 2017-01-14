 // адаптивное меню
$(document).ready(function() {
  $('#menu-trigger').click(function() {
    $('.nav').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.nav').removeAttr('style');
		 }
	});//end resize
});//end ready




