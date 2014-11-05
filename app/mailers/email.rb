class Email < ActionMailer::Base
  default from: "no-reply@tuix.co"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.email.recepcion.subject
  #
  def recepcion(parametros)

    @nombre = parametros[:nombre]
    @asunto = parametros[:asunto]
    @email = parametros[:email]
    @body = parametros[:body]

    mail to: ["elvizcacho@gmail.com","tuixcolombia@gmail.com","juancamilo_g@hotmail.com","juancamilogaviriaacosta@gmail.com"], :subject => "¡#{parametros[:nombre]} quiere hacer contacto con Tuix!"

  end
end
