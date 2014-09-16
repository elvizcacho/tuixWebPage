class HomeController < ApplicationController
  def index
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
end
