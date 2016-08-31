
$(document).ready( function(){

	//////////////////////////////////////////////////////////////////
	/// FULL HEIGHTS
	//////////////////////////////////////////////////////////////////

	var taco = $(window).height()
	$('.hero').css('height', taco+'px')
	$('.menu').css('height', taco+'px')
	$('.menu-wrap').css('height', taco+'px')
	$('.head').css('height', taco+'px')


	//////////////////////////////////////////////////////////////////
	/// MENU BUTTON
	//////////////////////////////////////////////////////////////////

	var fullPath = window.location.pathname;
	
	if(fullPath == "/") { 
				$('.home').addClass('strike')


		$('.btn-menu').on('click', function(e){
			e.preventDefault();
			$('.menu').toggleClass('menu-show')
			$('body').toggleClass('stop-scrolling')
			$('.btn-menu').toggleClass('btn-menu-show')
			$('.container').toggleClass('container-blur')
		});

		$('.btn-menu').addClass('btn-menu-pulse')
	
	} else {

		$('.btn-menu').on('click', function(e){
			e.preventDefault();
			$('.menu').toggleClass('menu-show')
			$('body').toggleClass('stop-scrolling')
			$('.btn-menu').toggleClass('btn-menu-show')
			$('.container').toggleClass('container-blur')
		});

	}


//////////////////////////////////////////////////////////////////
/// MENU STRIKE OUT
//////////////////////////////////////////////////////////////////

	var location = window.location.href
	
	if (location.includes('napkin')) {
		$('.napkin').addClass('strike');
	}
	if (location.includes('spring')) {
		$('.spring').addClass('strike');
	}
	if (location.includes('mediachain')) {
		$('.mediachain').addClass('strike');
	}
	if (location.includes('coach')) {
		$('.coach').addClass('strike');
	}
	if (location.includes('drip')) {
		$('.drip').addClass('strike');
	}
	if (location.includes('punch')) {
		$('.punch').addClass('strike');
	}
	if (location.includes('punch')) {
		$('.punch').addClass('strike');
	}
	if (location.includes('experiments')) {
		$('.experiments').addClass('strike');
	}
	if (location.includes('about')) {
		$('.about').addClass('strike');
	}
});


$( window ).resize(function() {
	//////////////////////////////////////////////////////////////////
	/// FULL HEIGHTS
	//////////////////////////////////////////////////////////////////
  var taco = $(window).height()
  $('.hero').css('height', taco+'px')
  $('.menu').css('height', taco+'px')
  $('.menu-wrap').css('height', taco+'px')
  $('.head').css('height', taco+'px')

});