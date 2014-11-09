class ApplicationController < ActionController::Base
	before_filter :set_locale
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def set_locale
    #render :text => t('home.meta.description')
  	if params[:locale]
  		I18n.locale = params[:locale]
  	elsif extract_locale_from_accept_language_header == 'es' 
  		I18n.locale = 'es'
  	elsif extract_locale_from_accept_language_header == 'en'
  		I18n.locale = 'en'
  	else
  		I18n.locale = I18n.default_locale
  	end
  end
 
private
  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
  end
end
