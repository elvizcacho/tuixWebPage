
$( document ).ready(function() {
 	
   	$('#barra a:eq(0)').click(onClickEnlace1);
   	$('#barra a:eq(1)').click(onClickEnlace2);
   	$('#barra a:eq(2)').click(onClickEnlace3);
   	$('#barra a:eq(3)').click(onClickEnlace4);
   	$('#barra a:eq(4)').click(onClickEnlace5);
   	$('#barra a:eq(5)').click(onClickEnlace6);
   	

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
	
}