class Api::V1::ChartsController < ApplicationController

  def product_page_views
    product_view_count = Visit.group(:product_id).order(:product_id).count

    @product_names = product_view_count.keys
    @visit_counts = product_view_count.values
  end

  def user_device_os
    device_os_count = User.group(:device_os).count

    @device_names = device_os_count.keys
    @device_oss = device_os_count.values
  end

  def user_device_model
    device_model_count = User.group(:device_model).count

    @device_model_names = device_model_count.keys
    @device_models = device_model_count.values
  end

  def index
    @visits = Visit.all
    @visit_count = @visits.length
    @user_count = User.count
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_model = User.top(:device_model, 1).keys[0]
    @common_user_city = Visit.top(:city, 1).keys[0]
    most_viewed_product = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product).product_name
  end

  def product_charts
    @products = Product.all
  end

  def user_charts
    @users = User.all
  end

  def location_charts
    @visits = Visit.all
    @top_states = Visit.top(:state)
    @top_cities = Visit.top(:city)
  end

  def visit_charts
    most_popular_product = Visit.top(:product_id).keys[0]
    @most_popular_product = Product.find(most_popular_product).product_name
  end

  def purchase_charts
    most_purchased_product = Purchase.top(:product_id).keys[0]
    @most_purchased_product = Product.find(most_purchased_product).product_name
    @most_popular_color = Purchase.top(:color).keys[0]
    @most_common_quantity = Purchase.top(:quantity).keys[0]
    @average_cost = Purchase.average(:cost)
  end

end
