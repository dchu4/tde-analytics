include PagesHelper

class PagesController < ApplicationController

  def index
    visits = Visit.all
    @visit_count = visits.length
    @user_count = User.count
    
    # most viewed product
    most_viewed_product_id = Visit.top(:product_id).keys[0]
    @most_viewed_product = Product.find(most_viewed_product_id).product_name

    result = get_data('2017-01-01')

    # most purchased product
    product_hash = Hash.new 0
    result.each { |row| product_hash["#{row[5]}"] += row[7].to_i }
    most_purchased_product = product_hash.values.sort[-1]
    @most_purchased_product = product_hash.key(most_purchased_product)

    # conversion rate
    transactions = result.collect { |row| row[3] }
    transaction_count = transactions.uniq.length
    month_visit_count = Visit.where(created_at: 31.days.ago..1.day.ago).count
    @conversion_rate = "#{((transaction_count.to_f/month_visit_count.to_f)*100).round(2)}%"

    # total revenue
    @total_revenue = 0
    result.each { |row| @total_revenue += row[6].to_f }
  end

  def products

  end

  def users
    users = User.all
    user_visits = users.collect { |i| i.visits.count }
    total_visits = user_visits.inject(:+)
    @avg_visits = total_visits / users.count

    purchase_data

    @most_frequent_os = User.top(:device_os, 1).keys[0]
    @most_frequent_model = User.top(:device_model, 1).keys[0]

    duration_data

    gon.osDataLabels = @os_version_dur.keys
    gon.deviceDataLabels = @device_type_dur.keys
    gon.osVersionDur = @os_version_dur.values
    gon.deviceTypeDur = @device_type_dur.values
  end

  def locations
    @visits = Visit.all
    @top_states = Visit.top(:state)
    @top_cities = Visit.top(:city)

    @top_city = Visit.top(:city, 1).keys[0]
    @top_state = Visit.top(:state, 1).keys[0]
    @top_country = Visit.top(:country, 1).keys[0]

    location_data

    gon.countryPurchases = @country_purchases
    @top_purchases_country = @country_purchases[1][0]

    gon.countryLabels = @country_revenue.keys
    gon.countryRevenue = @country_revenue.values
  end

  def visits
    duration_results = session_data('ga:sessions,ga:sessionDuration', nil)
    @avg_visit_duration = "#{((duration_results[0][1].to_f / duration_results[0][0].to_f) / 60).round(2)} minutes"
  end

  def purchases
    monthly_check
    biweekly_check
    weekly_check
    yesterday_check
    purchase_data

    gon.days = @days
    gon.dailyRevenue = @daily_revenue
    gon.dailyPurchases = @daily_purchases

    os_device_data

    gon.osDataLabels = @os_version_trans.keys
    gon.deviceDataLabels = @device_type_trans.keys
    gon.osVersionTrans = @os_version_trans.values
    gon.deviceTypeTrans = @device_type_trans.values
    gon.osVersionRev = @os_version_rev.values
    gon.deviceTypeRev = @device_type_rev.values
  end

end
