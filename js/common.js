$(document).ready(function() {

/************* Всплывающая форма *************/

	$(".call-back").click(function() {
		// $("#callback h4").html($(this).text());
		// $("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

/************** Аякс отправка форм **************/
	
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/************ Top arraw ************/

  $(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".second-section").height()+5 }, "slow");
		return false;
	});

  	// Menu

  	 $('.menu-wrap').on('click', function(){
	    $('.fix-menu, .nav-img, .delete, .menu, .side-menu, .side-menu li a, .soc-items, .soc-img, .soc-descr').toggleClass('open');
  	});


  	/************ Вторая секция - отзывы ************/
	$(".owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 800,
		autoplaySpeed : 1000,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});


});	