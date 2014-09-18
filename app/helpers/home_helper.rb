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
			html += '<li><a href="#"' + '>' + "#{opcion[1]}" + '</a></li>'
		end
		html += '</ul>'
		html += '</div>'
		html += '</div>'

		return html.html_safe
	end

	def carrousel_tag(p)
		i = 0
		html = '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
		html += '<ol class="carousel-indicators">'
		while i < p[:images].length
			html += '<li data-target="#myCarousel" data-slide-to="'"#{i}"'" class="' + "#{(i == 0)? "active":""}" + '"></li>'
			i += 1
		end
		html += '</ol>'
		html += '<div class="carousel-inner">'
		i = 0
		while i < p[:images].length
			html += '<div class="item' + "#{(i == 0)? " active":""}" +'">'
			html += image_tag("#{p[:images][i]}")
			html += '<div class="container">'
			html += '<div class="carousel-caption">'
			html += '<h1>' + "#{p[:titles][i]}" + '</h1>'
			html += '<p>' + "#{p[:texts][i]}" + '</p>'
			html += '</div>'
			html += '</div>'
			html += '</div>'
			i += 1
		end
		html += '</div>'
		html += '<a class="left carousel-control" href="http://getbootstrap.com/examples/carousel/#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>'
		html += '<a class="right carousel-control" href="http://getbootstrap.com/examples/carousel/#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>'
		html += '</div>'
		return html.html_safe
	end
end
