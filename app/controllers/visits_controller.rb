class VisitsController < ApplicationController
  def index
    @visits = Visit.all

    @visit_count = @visits.length
  end

  def create
    ip = request.remote_ip
    location = Geocoder.search(ip).first

    Visit.create(
        user_id: params[:user_id],
        product_id: params[:product_id],
        time: Time.now,
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
