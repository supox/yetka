require 'rest_mail'
ActionMailer::Base.add_delivery_method :rest_mail, RestMail
