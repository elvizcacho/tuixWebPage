var menu_elementos=document.getElementById('barra').getElementsByTagName('li');
var objeto_seleccionado=menu_elementos[0];
for (var i=0;i<menu_elementos.length;i++){
		menu_elementos[i].addEventListener('click',onClickElementoMenu,false);
		menu_elementos[i].addEventListener('mouseover',onMouseOverElementoMenu,false);
		menu_elementos[i].addEventListener('mouseout',onMouseQutElementoMenu,false);
	}
	
function onMouseQutElementoMenu(e){	
  limpiarActivos();
}

function onMouseOverElementoMenu(e){
	var objeto=e.target;
	limpiarActivos();
	objeto.parentNode.className='active';
	objeto.parentNode.style.opacity=0.85;
}


function onClickElementoMenu(e){
  var objeto=e.target;
  objeto_seleccionado=objeto.parentNode;
  limpiarActivos();
  objeto.parentNode.className='active';
}

function limpiarActivos(){
	for (var i=0;i<menu_elementos.length;i++){
		if(objeto_seleccionado==menu_elementos[i]){
			menu_elementos[i].className="active";
			menu_elementos[i].style.opacity=1;
		}
		else{
			menu_elementos[i].className="";
			menu_elementos[i].style.opacity=1;
		}
		
	}
}