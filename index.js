$(function() {

	let header = $('#header');
	let intro = $('#home');
	let headerInner = $('.header__inner')
	let scrollPosition = $(window).scrollTop();

	$(window).on('scroll load resize', () => {
		let introHeight = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		if(scrollPosition > introHeight){
			header.addClass('fixed');
			headerInner.addClass('fixed') 
		}
		else{
			header.removeClass('fixed')
			headerInner.removeClass('fixed')
		}
	})


	$("[data-scroll]").on('click', function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('html, body').animate({
			scrollTop: elementOffset
		});


	})

})