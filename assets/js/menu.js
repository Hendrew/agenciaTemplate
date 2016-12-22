$(function() {
	var alturaHeader = $("header").height();

	alturaHeader = Math.round(alturaHeader);

	var baseMenu = $('.base-menu');
	var btnMenu  = $('.btn-menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > alturaHeader) {
			baseMenu.addClass("menu-fixo");
			btnMenu.addClass('btn-fixo');
		} else {
			baseMenu.removeClass("menu-fixo");
			btnMenu.removeClass('btn-fixo');
		}
	});  
});

$(function() {
	$(".menu ul li a").on('click', function(event) {
		event.preventDefault();

		var valor = $(this).attr('href');

		$('html,body').animate({scrollTop:$(valor).offset().top}, 800);
	});
});

$(function() {
	
	$(".btn-menu").on('click', function(event) {
		event.preventDefault();

		if ($(this).hasClass('aberto')) {
			$(".menu").slideUp();
			$(".btn-menu").removeClass('aberto');
		} else {
			$(".menu").slideDown();
			$(".btn-menu").addClass('aberto');
		}
	});
});

$(function() {
	$(window).resize(function() {
		var largura = $(this).width();

		if (largura > 480) {
			$(".menu").css('display', 'block');
		} else {
			$(".menu").css('display', 'none');
		}
	});
});