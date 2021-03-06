class VisitsController < ApplicationController

  def index
    
  end

  def create
    ip = request.remote_ip
    location = Geocoder.search(ip).first

    user = User.find_or_create_by(
        device_model: params[:device_model],
        device_os: params[:device_os],
        device_unique_id: params[:device_unique_id]
      )

    Visit.create(
        user_id: user.id,
        product_id: Product.find_by(product_sku: params[:product_sku]).id,
        ip: ip,
        country: location.country,
        city: location.city,
        state: location.state,
        postal_code: location.postal_code
      )
  end

  def show
    @visit = Visit.find(params[:id])
  end
end
