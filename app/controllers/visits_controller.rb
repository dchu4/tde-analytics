class VisitsController < ApplicationController
  def index
    @visits = Visit.all
  end

  def create
    Visit.create(
        user_id: params[:user_id],
        product_id: params[:product_id],
        time: Time.now,
        ip: params[:ip]
      )
  end

  def show
    @visit = Visit.find(params[:id])
    location = Geocoder.search(@visit.ip)
    @country = location[0].data['country_code']
  end
end
