var _body=document.getElementById('super');
_body.style.opacity=0;
document.documentElement.style.overflowX = "hidden";
//document.documentElement.style.overflowY = "hidden";
var logo = document.getElementById("logo");
var logom2 = document.getElementById("logom2");
var x=window.innerWidth;
var rightLogom2= -440;
var rightLogom2= (x>=1200)?-700:(x<1200&&x>=992)?-580:(x<=991&&x>=768)?-440:-0.613*x + 30.535;
rightLogom2-=500;
var redyAnima2=false;
var redyAnima1=false;
var topLogo=-500;
var anguloLogom2=90;
var topLogom2= (x>=1200)?-270:(x<1200&&x>=992)?-220:(x<=991&&x>=768)?-150:-0.3138*x + 93.341;
logo.style.top=topLogo+'px';
logom2.style.top=topLogom2+'px';
logom2.style.right=rightLogom2+'px';
var finAnimaLogo=false;
var baja=true;
var pasoLogom2=0;
var limiteUp=0;
var limiteDown=100;
logo.style.opacity=0;
logo.style.opacity=0;
//console.log(window.innerWidth+" "+logom2.style.right+" "+logom2.style.top);

var anima2=setInterval(function(){
  if(redyAnima2&&redyAnima1){
	logom2.style.transform		 = 'rotate('+anguloLogom2+'deg)';
    logom2.style.webkitTransform = 'rotate('+anguloLogom2+'deg)';
	logom2.style.mozTransform    = 'rotate('+anguloLogom2+'deg)'; 
    logom2.style.msTransform     = 'rotate('+anguloLogom2+'deg)'; 
    logom2.style.oTransform      = 'rotate('+anguloLogom2+'deg)'; 
    logom2.style.transform       = 'rotate('+anguloLogom2+'deg)'; 
	
	logom2.style.right=rightLogom2+'px';
	if(pasoLogom2==0){
		if(rightLogom2<((x>=1200)?-700+70:(x<1200&&x>=992)?-580+60:(x<=991&&x>=768)?-440+45:-0.613*x + 30.535+35)){
		  rightLogom2+=10*(x/1366.0);//Velocidad de desplazamiento antes de chochar.
		  anguloLogom2-=10*(x/1366.0);//Velocidad de giro antes de chochar.
		}
		else{
			pasoLogom2=1;
		}
	}
	else if(pasoLogom2==1){
		if(rightLogom2>((x>=1200)?-700:(x<1200&&x>=992)?-580:(x<=991&&x>=768)?-440:-0.613*x + 30.535-10)){
		  rightLogom2-=5*(x/1366.0);//Velocidad de desplazamiento despues de chochar.
		  anguloLogom2+=10*(x/1366.0);//Velocidad de giro despues de chocar.
		}
	}
  }
},10);

var anima1=setInterval(function(){
  if(redyAnima1&&redyAnima2){
	if(baja){
		if(topLogo<limiteDown){
     	  logo.style.top=topLogo+'px';
		  topLogo+=10;
		}
		else{
			baja=false;
			limiteDown-=5;
		}
	}
	if(!baja){
		if(topLogo>limiteUp){
     	  logo.style.top=topLogo+'px';
		  topLogo-=10;
		}
		else{
			baja=true;
			limiteUp+=50;
		}
	}
	if(finAnimaLogo){
	  clearInterval(anima1);
	}
  }
},10);

window.onload=function(){
	redyAnima1=true;
	redyAnima2=true;
	logo.style.opacity=1;
	logo.style.opacity=1;
	_body.style.opacity=1;
};
