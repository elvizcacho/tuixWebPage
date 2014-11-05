class HomeController < ApplicationController
  def index
    @url = "#{request.protocol}#{request.host}:#{request.port}"
  end

  def quienes_somos
  	respond_to do |format|
  		format.html {redirect_to("/home/index")}
  	end
  end

  def aplicaciones_web
  	respond_to do |format|
  		format.html {redirect_to("/home/index")}
  	end
  end

  def aplicaciones_moviles
  	respond_to do |format|
  		format.html {redirect_to("/home/index")}
  	end
  end

  def diseno_grafico
  	respond_to do |format|
  		format.html {redirect_to("/home/index")}
  	end
  end

  def contactenos
  	respond_to do |format|
  		format.html {redirect_to("/home/index")}
    end
  end

  def enviar
    @url = "#{request.protocol}#{request.host}:#{request.port}"
    #Email.recepcion(params).deliver
  end
  
end
