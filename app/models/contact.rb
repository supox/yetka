class Contact < MailForm::Base
  attribute :name,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone,     phone: true
  attribute :message
  attribute :nickname,  captcha: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact from SheketBeAnan",
      :to => "ilan.ben.hagai@gmail.com",
      :from => "info@mg.sheketbeanan.com",
      :reply_to => %("#{name}" <#{email}>)
    }
  end
end
