module PagesHelper
  def get_data(results_date)
    Google::Auth::ServiceAccountCredentials.new
    analytics = Google::Apis::AnalyticsV3::AnalyticsService.new
    scope = ['https://www.googleapis.com/auth/analytics.readonly']
    analytics.authorization = Google::Auth.get_application_default(scope)
    analytics.authorization.fetch_access_token!

    view_id = ENV["view_id"]
    start_date = results_date
    end_date = 'today'
    metrics = 'ga:itemRevenue, ga:itemQuantity'
    filters = 'ga:campaign==buy_me_now'
    dimensions = {
      dimensions: 'ga:date, ga:referralPath, ga:campaign, ga:transactionId, ga:productSku, ga:productName' 
      #filters: filters
    }

    analytics_service = analytics.get_ga_data(view_id, start_date, end_date, metrics, dimensions)
    analytics_service.rows
  end

  def monthly_check
    monthly_result = PagesHelper.get_data('31daysAgo')
    monthly_date = Visit.where(created_at: 31.days.ago..1.day.ago).count

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
  end

  def biweekly_check
    biweekly_result = PagesHelper.get_data('15daysAgo')
    biweekly_date = Visit.where(created_at: 15.days.ago..1.day.ago).count

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
  end

  def weekly_check
    weekly_result = PagesHelper.get_data('8daysAgo')
    weekly_date = Visit.where(created_at: 8.days.ago..1.day.ago).count

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
  end

  def yesterday_check
    yesterday_result = PagesHelper.get_data('yesterday')
    yesterday_date = Visit.where(created_at: 2.days.ago.beginning_of_day..1.day.ago.beginning_of_day).count
    
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
