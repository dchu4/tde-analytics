class Api::V1::ChartsController < ApplicationController

  def index
    #For visitors per day chart
    visits_timeline = Visit.group_by_day(:created_at).count
    @dates = visits_timeline.collect { |key| key[0].strftime("%b %d, %Y") }
    @numbers = visits_timeline.values

    #For user country visit locations chart
    countries_count = Visit.group(:country).count
    @countries = countries_count.keys
    @visits = countries_count.values

    #For number of product visits chart
    product_view_count = Visit.group(:product_id).order(:product_id).count

    @product_names = product_view_count.keys
    @visit_counts = product_view_count.values

    #For device os count chart
    device_os_count = User.group(:device_os).count

    @device_names = device_os_count.keys
    @device_oss = device_os_count.values

    #For device model count chart
    device_model_count = User.group(:device_model).count

    @device_model_names = device_model_count.keys
    @device_models = device_model_count.values

    #For the quick stats 
    @site_visits = @visits.length
    @user_count = User.count
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_model = User.top(:device_model, 1).keys[0]
    @common_user_city = Visit.top(:city, 1).keys[0]
    most_viewed_product = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product).product_name
  end
end
