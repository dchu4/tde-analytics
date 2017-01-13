class Api::V1::ChartsController < ApplicationController

  def index
    visits_timeline = Visit.group_by_day(:created_at).count
    @dates = visits_timeline.collect { |key| key[0].strftime("%b %d, %Y") }
    @numbers = visits_timeline.values

    countries_count = Visit.group(:country).count
    @countries = countries_count.keys
    @visits = countries_count.values

    product_view_count = Visit.group(:product_id).order(:product_id).count

    @product_names = product_view_count.keys
    @visit_counts = product_view_count.values

    device_os_count = User.group(:device_os).count

    @device_names = device_os_count.keys
    @device_oss = device_os_count.values

    device_model_count = User.group(:device_model).count

    @device_model_names = device_model_count.keys
    @device_models = device_model_count.values
  end

end
