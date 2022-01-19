$(document).ready(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $(window).on('orientationchange resize', function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    $('.preloader').delay(300).fadeOut(500);

	var countdown = 30 * 60 * 1000;
	var timerId = setInterval(function(){
	  countdown -= 1000;
	  var min = Math.floor(countdown / (60 * 1000));
	  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
	  if (countdown <= 0) {
	     clearInterval(timerId);
	  } else {
        if (min < 10) {
            $('.minute h2').text("0" + min)
        } else {
            $('.minute h2').text(min)
        }
        if (sec < 10) {
            $('.second h2').text("0" + sec)
        } else {
            $('.second h2').text(sec)
        }
	  }
	}, 1000);

	$("a.anchor").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    /*тут на мульти продукт*/
	if ($(document).scrollTop() > $(".intro").height() && $(document).scrollTop() < ( $(".buy").offset().top - $(".buy").height() ) ) {
        $('.banner').removeClass('unactive');
    } else {
        $('.banner').addClass('unactive');
    }
    /*це на соло продукт*/
    /*if ($(document).scrollTop() > $(".intro").height() && $(document).scrollTop() < ( $(".buy_solo").offset().top - $(".buy_solo").height() ) ) {
        $('.banner').removeClass('unactive');
    } else {
        $('.banner').addClass('unactive');
    }*/

    $(document).scroll(function(){
        /*тут на мульти продукт*/
        if ($(document).scrollTop() > $(".intro").height() && $(document).scrollTop() < ( $(".buy").offset().top - $(".buy").height() ) ) {
            $('.banner').removeClass('unactive');
        } else {
            $('.banner').addClass('unactive');
        }
        /*це на соло продукт*/
        /*if ($(document).scrollTop() > $(".intro").height() && $(document).scrollTop() < ( $(".buy_solo").offset().top - $(".buy_solo").height() ) ) {
            $('.banner').removeClass('unactive');
        } else {
            $('.banner').addClass('unactive');
        }*/
    })
});