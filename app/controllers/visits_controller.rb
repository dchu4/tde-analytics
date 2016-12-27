class VisitsController < ApplicationController
  def index
    @visits = Visit.all
  end

  def create
    Visit.create(
        user_id: params[:user_id],
        product_id: params[:product_id],
        time: Time.now,
        ip: params[:ip],
        latitude: params[:latitude].to_f,
        longitude: params[:longitude].to_f
      )
  end

  def show
    @visit = Visit.find(params[:id])
    p @visit
  end
end
