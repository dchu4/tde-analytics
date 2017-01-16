class Api::V1::ChartsController < ApplicationController

  def index
    #For visitors per day chart
    visits_timeline = Visit.group_by_day(:created_at).count
    @dates = visits_timeline.collect { |key| key[0].strftime("%b %d, %Y") }
    @numbers = visits_timeline.values

    countries_count = Visit.group(:country).count
    @countries = countries_count.keys
    @country_visits = countries_count.values

    product_view_count = Visit.group(:product_id).order(:product_id).count
    @product_names = product_view_count.keys
    @visit_counts = product_view_count.values

    cities_count = Visit.group(:city).count
    @cities = cities_count.keys
    @city_visits = cities_count.values

    device_os_count = User.group(:device_os).count
    @device_names = device_os_count.keys
    @device_oss = device_os_count.values

    device_model_count = User.group(:device_model).count
    @device_model_names = device_model_count.keys
    @device_models = device_model_count.values
    
    #For the quick stats 
    @site_visits = Visit.all.length
    @user_count = User.count
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_model = User.top(:device_model, 1).keys[0]
    @common_user_city = Visit.top(:city, 1).keys[0]
    most_viewed_product = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product).product_name
  end

  def visit_charts

  end

  def location_charts
    countries = Visit.group(:country).count
    @countries_array = [["Country", "Visitors"]]
    countries.each { |x| @countries_array << [x[0], x[1]] }

    states = Visit.group(:state).count
    @states_array = []
    states.each { |x| @states_array << [x[0], x[1]] }

    cities = Visit.group(:city).count
    @cities_array = []
    cities.each { |x| @cities_array << [x[0], x[1]] }
  end
end
