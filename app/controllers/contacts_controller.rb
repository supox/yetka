class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = 'ההודעה נשלחה'
    else
      flash.now[:error] = 'בעיה בשליחת ההודעה'
      render :new
    end
  end

end
