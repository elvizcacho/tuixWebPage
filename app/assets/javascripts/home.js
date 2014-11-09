
var ready = function() {

    $('#link-img-logo').click(onClickEnlace1);
   	$('#barra a:eq(0)').click(onClickEnlace1);
   	$('#barra a:eq(1)').click(onClickEnlace5);
   	$('#barra a:eq(2)').click(onClickEnlace6);
   	init();//Inicia la animacion del logo
};

$(document).ready(ready);
$(document).on('page:load', ready);

var size = [window.width,window.height];

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

$(document).scroll(function(e){
	if ($(document).scrollLeft() > 50){
		$(document).scrollLeft(0);	
	}
});

function onClickEnlace1(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('body').offset().top - 50 }, 1000, 'easeInOutQuint');
}

function onClickEnlace2(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('#part2').offset().top - 50 }, 1000, 'easeInOutQuint');

}

function onClickEnlace3(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('#part3').offset().top - 50 }, 1000, 'easeInOutQuint');
}

function onClickEnlace4(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('#part4').offset().top - 50 }, 1000, 'easeInOutQuint');
}

function onClickEnlace5(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('#part5').offset().top - 50 }, 1000, 'easeInOutQuint');
}

function onClickEnlace6(e){
	e.preventDefault();
	$('html, body').animate({ scrollTop:  $('#part6').offset().top - 50 }, 1000, 'easeInOutQuint');
}