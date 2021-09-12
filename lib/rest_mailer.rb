class RestMail
  # initialize is called with the settings provided from your config
  def initialize(settings)
    @settings = settings
  end

  # deliver! is the only other required method.  It is passed the mail object to send.
  # mail.encoded returns the email in the format needed to send it.  
  # Look at other mail delivery methods for inspiration (Mail::Sendmail, Mail::FileDelivery, Mail::SMTP, etc)
  def deliver!(mail)
    @client.post @settings['api_url'],
        :from => @settings['from_email'],
        :to => @settings['to_email'],
        :subject => "Email from Yetka",
        :text => mail.encoded,
        :html => mail.encoded
  end

  def rest_client
    @client ||= RestClient.new(@settings)
  end
end
