include PagesHelper

class Api::V1::ChartsController < ApplicationController

  def index
    visits_timeline = Visit.group_by_day(:created_at).count
    @dates = visits_timeline.collect { |key| key[0].strftime("%b %d, %Y") }
    @numbers = visits_timeline.values

    countries_count = Visit.group(:country).count
    @countries = countries_count.keys
    @country_visits = countries_count.values

    product_view_count = Visit.group(:product_id).order(:product_id).count
    product_ids = product_view_count.keys
    @product_names = product_ids.collect { |p| Product.find(p).product_name }
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

    #Visits and Purchases grouped by day
    month_product_visits = Visit.where(created_at: 31.days.ago..1.day.ago).group_by_day(:created_at).count
    formatted_date = month_product_visits.collect { |key| key[0].strftime("%Y%m%d") }
    @month_product_visit_counts = month_product_visits.values

    month_product_purchases = get_data('31daysAgo')
    month_purchase_data = Hash.new 0
    month_product_purchases.each { |row| month_purchase_data["#{row[0]}"] += 1 }

    @month_product_purchases = []
    formatted_date.each do |date|
      if month_purchase_data.key?(date)
        @month_product_purchases << month_purchase_data[:date]
      else
        @month_product_purchases << 0
      end
    end
    @month_product_visit_dates = formatted_date.collect { |date| date.to_date.strftime("%b %d, %Y") }

    #Visits and Purchases grouped by products
    product_visits = Visit.group(:product_id).count
    product_hash = Hash.new 0
    product_visits.each { |v| product_hash[Product.find(v[0]).product_name] = v[1] }
    sorted_visit_hash = Hash[product_hash.sort]
    @sorted_product_names = sorted_visit_hash.keys
    @product_visit_counts = sorted_visit_hash.values

    product_purchases = get_data('2017-01-01')
    purchase_data = Hash.new 0
    product_purchases.each { |row| purchase_data["#{row[5]}"] += row[7].to_i }
    purchase_data = Hash[purchase_data.sort]

    @sorted_purchases = []
    @sorted_product_names.each do |name|
      if purchase_data.key?(name)
        @sorted_purchases << purchase_data[name]
      else
        @sorted_purchases << 0
      end
    end
    
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

  def product_charts
    gon.product_id = params[:id]

    product_visits = Visit.where(product_id: params[:id]).group_by_day(:created_at).count
  end
end
