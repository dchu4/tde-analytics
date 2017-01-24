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
    @conversion_rate = "#{(result.length/Visit.all.count)*100}%"
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
    monthly_result = PagesHelper.get_data('31daysAgo')
    biweekly_result = PagesHelper.get_data('15daysAgo')
    weekly_result = PagesHelper.get_data('8daysAgo')
    yesterday_result = PagesHelper.get_data('yesterday')

    monthly_date = Visit.where(created_at: 31.days.ago..1.day.ago).count
    biweekly_date = Visit.where(created_at: 15.days.ago..1.day.ago).count
    weekly_date = Visit.where(created_at: 8.days.ago..1.day.ago).count
    yesterday_date = Visit.where(created_at: 2.days.ago.beginning_of_day..1.day.ago.beginning_of_day).count

    if monthly_date > 0 && monthly_result
      @monthly_conversion_rate = "#{(monthly_result.length/monthly_date)*100}%"

      monthly_amount = Hash.new 0
      monthly_quantity = Hash.new 0
      @monthly_dates = Hash.new 0

      monthly_result.each do |row|
        monthly_amount["#{row[5]}"] += row[6].to_f
        monthly_quantity["#{row[5]}"] += row[7].to_f
        @monthly_dates["#{row[0].to_date}"] += 1
      end

      @monthly_labels = monthly_amount.keys
      @monthly_amount = monthly_amount.values
      @monthly_quantity = monthly_quantity.values

      gon.monthlyLabels = @monthly_labels
      gon.monthlyAmount = @monthly_amount
      gon.monthlyQuantity = @monthly_quantity
    else
      @monthly_conversion_rate = "0%"
    end

    if biweekly_date > 0 && biweekly_result
      @biweekly_conversion_rate = "#{(biweekly_result.length/biweekly_date)*100}%"

      biweekly_amount = Hash.new 0
      biweekly_quantity = Hash.new 0
      @biweekly_dates = Hash.new 0

      biweekly_result.each do |row|
        biweekly_amount["#{row[5]}"] += row[6].to_f
        biweekly_quantity["#{row[5]}"] += row[7].to_f
        @biweekly_dates["#{row[0].to_date}"] += 1
      end

      @biweekly_labels = biweekly_amount.keys
      @biweekly_amount = biweekly_amount.values
      @biweekly_quantity = biweekly_quantity.values

      gon.biweeklyLabels = @biweekly_labels
      gon.biweeklyAmount = @biweekly_amount
      gon.biweeklyQuantity = @biweekly_quantity
    else
      @biweekly_conversion_rate = "0%"
    end

    if weekly_date > 0 && weekly_result
      @weekly_conversion_rate = "#{(weekly_result.length/weekly_date)*100}%"

      weekly_amount = Hash.new 0
      weekly_quantity = Hash.new 0
      @weekly_dates = Hash.new 0

      weekly_result.each do |row|
        weekly_amount["#{row[5]}"] += row[6].to_f
        weekly_quantity["#{row[5]}"] += row[7].to_f
        @weekly_dates["#{row[0].to_date}"] += 1
      end

      @weekly_labels = weekly_amount.keys
      @weekly_amount = weekly_amount.values
      @weekly_quantity = weekly_quantity.values

      gon.weeklyLabels = @weekly_labels
      gon.weeklyAmount = @weekly_amount
      gon.weeklyQuantity = @weekly_quantity
    else
      @weekly_conversion_rate = "0%"
    end

    if yesterday_date > 0 && yesterday_result
      @yesterday_conversion_rate = "#{(yesterday_result.length/yesterday_date)*100}%"

      yesterday_amount = Hash.new 0
      yesterday_quantity = Hash.new 0
      @yesterday_dates = Hash.new 0

      yesterday_result.each do |row|
        yesterday_amount["#{row[5]}"] += row[6].to_f
        yesterday_quantity["#{row[5]}"] += row[7].to_f
        @yesterday_dates["#{row[0].to_date}"] += 1
      end

      @yesterday_labels = yesterday_amount.keys
      @yesterday_amount = yesterday_amount.values
      @yesterday_quantity = yesterday_quantity.values

      gon.yesterdayLabels = @yesterday_labels
      gon.yesterdayAmount = @yesterday_amount
      gon.yesterdayQuantity = @yesterday_quantity
    else
      @yesterday_conversion_rate = "0%"
    end

  end

end
