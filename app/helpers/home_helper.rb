module HomeHelper
	def menu_navegacion2(opciones)
		html = '<div class="navbar navbar-inverse navbar-fixed-top nav-color" role="navigation">'
		html += '<div class="navbar-header">'
		html += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
		html += '<span class="sr-only">Toggle navigation</span>'
		html += '<span class="icon-bar"></span>'
		html += '<span class="icon-bar"></span>'
		html += '<span class="icon-bar"></span>'
		html += '</button>'
		html += '<a class="navbar-brand" href="#">' + image_tag("logo.png",:class => "logo-nav") + '</a>'
		html += '</div>'
		html += '<div class="collapse navbar-collapse">'
		html += '<ul id="barra" class="nav navbar-nav nav-color nav-text-color">'
		for opcion in opciones
			html += '<li><a href=/home/' +"#{opcion[0]}" + '>' + "#{opcion[1]}" + '</a></li>'
		end
		html += '</ul>'
		html += '</div>'
		html += '</div>'

		return html.html_safe
	end
end
