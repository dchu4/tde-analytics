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
