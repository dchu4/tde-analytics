include PagesHelper

class PagesController < ApplicationController

  def index
    @visits = Visit.all
    @visit_count = @visits.length
    @user_count = User.count
    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_model = User.top(:device_model, 1).keys[0]
    @common_user_city = Visit.top(:city, 1).keys[0]
    most_viewed_product = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product).product_name

    result = PagesHelper.get_data('31daysAgo')
    @conversion_rate = "#{(result.length/Visit.where(created_at: 31.days.ago..1.day.ago).count)*100}%"
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
    monthly_check
    biweekly_check
    weekly_check
    yesterday_check
  end

end
