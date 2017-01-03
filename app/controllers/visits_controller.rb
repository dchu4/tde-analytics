class VisitsController < ApplicationController
  def index
    @visits = Visit.all

    @visit_count = @visits.length
    @user_count = User.count
<<<<<<< HEAD
    @most_frequent_os = User.group(:device_os).order('count(*)').limit(1).pluck(:device_os).first
    @most_viewed_product = Visit.maximum(:product_id)
=======
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_type = User.top(:device_type, 1).keys[0]
>>>>>>> added quick stats
  end

  def create
    ip = request.remote_ip
    location = Geocoder.search(ip).first

    user = User.find_or_create_by(
        device_type: params[:device_type],
        device_os: params[:device_os],
        device_unique_id: params[:device_unique_id]
      )

    Visit.create(
        user_id: user.id,
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
