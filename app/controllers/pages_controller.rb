class PagesController < ApplicationController

  def index
    @visits = Visit.all
    @visit_count = @visits.length
    @user_count = User.count
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_type = User.top(:device_type, 1).keys[0]
    @common_user_city = Visit.top(:city, 1).keys[0]
    most_viewed_product = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product).product_name
  end

  def product_charts
    @products = Product.all
  end

  def user_charts

  end

  def location_charts
    @visits = Visit.all
    @top_states = Visit.top(:state)
    @top_cities = Visit.top(:city)
  end

  def visit_charts

  end

  def purchase_charts

  end

end
