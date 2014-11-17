
var fondo1=document.getElementById('fondo1');
var fondo2=document.getElementById('fondo2');
var body=document.getElementsByTagName('body');

window.onscroll=scrolling;

function scrolling(e){
console.log(window.scrollY);
	var barraV=window.scrollY;
		console.log(barraV);
	if(barraV>630&&barraV<1200){
		fondo1.style.top=(barraV+50)+'px';
	}
	
	if(barraV>1200&&barraV<2200){
		fondo2.style.top=(barraV)+'px';
	}
}