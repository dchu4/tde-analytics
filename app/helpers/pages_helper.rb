module PagesHelper
  def get_data(results_date)
    Google::Auth::ServiceAccountCredentials.new
    analytics = Google::Apis::AnalyticsV3::AnalyticsService.new
    scope = ['https://www.googleapis.com/auth/analytics.readonly']
    analytics.authorization = Google::Auth.get_application_default(scope)
    analytics.authorization.fetch_access_token!

    view_id = ENV["view_id"]
    start_date = results_date
    end_date = 'yesterday'
    metrics = 'ga:itemRevenue, ga:itemQuantity'
    filters = 'ga:campaign==buy_me_now'
    dimensions = {
      dimensions: 'ga:date, ga:referralPath, ga:campaign, ga:transactionId, ga:productSku, ga:productName' 
      #filters: filters
    }

    analytics_service = analytics.get_ga_data(view_id, start_date, end_date, metrics, dimensions)
    analytics_service.rows
  end

  def conversion_rate(transactions, visits)
    "#{((transactions.to_f/visits.to_f)*100).round(2)}%"
  end

  def monthly_check
    monthly_result = self.get_data('31daysAgo')
    monthly_visits = Visit.where(created_at: 31.days.ago..1.day.ago).count

    if monthly_visits > 0 && monthly_result
      monthly_transactions = monthly_result.collect { |row| row[3] }
      monthly_trans_count = monthly_transactions.uniq.length
      @monthly_conversion_rate = conversion_rate(monthly_trans_count, monthly_visits)

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
    biweekly_result = self.get_data('15daysAgo')
    biweekly_visits = Visit.where(created_at: 15.days.ago..1.day.ago).count

    if biweekly_visits > 0 && biweekly_result
      biweekly_transactions = biweekly_result.collect { |row| row[3] }
      biweekly_trans_count = biweekly_transactions.uniq.length
      @biweekly_conversion_rate = conversion_rate(biweekly_trans_count, biweekly_visits)

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
    weekly_result = self.get_data('8daysAgo')
    weekly_visits = Visit.where(created_at: 8.days.ago..1.day.ago).count

    if weekly_visits > 0 && weekly_result
      weekly_transactions = weekly_result.collect { |row| row[3] }
      weekly_trans_count = weekly_transactions.uniq.length
      @weekly_conversion_rate = conversion_rate(weekly_trans_count, weekly_visits)

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
    yesterday_result = self.get_data('yesterday')
    yesterday_visits = Visit.where(created_at: 2.days.ago.beginning_of_day..1.day.ago.beginning_of_day).count
    
    if yesterday_visits > 0 && yesterday_result
      yesterday_transactions = yesterday_result.collect { |row| row[3] }
      yesterday_trans_count = yesterday_transactions.uniq.length
      @yesterday_conversion_rate = conversion_rate(yesterday_trans_count, yesterday_visits)

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

  def purchase_data
    purchases = self.get_data('2017-01-01')
    users = User.all.count

    if purchases
      transactions = Hash.new 0
      unique_item_trans = Hash.new 0
      total_revenue = 0
      daily_revenue_hash = Hash.new 0
      daily_purchases_hash = Hash.new 0

      purchases.each do |row| 
        transactions["#{row[3]}"] += row[7].to_i
        unique_item_trans["#{row[3]}"] += 1
        total_revenue += row[6].to_i
        daily_revenue_hash["#{row[0].to_date}"] += row[6].to_f
        daily_purchases_hash["#{row[0].to_date}"] += 1
      end

      transaction_items = transactions.values
      item_count = transaction_items.inject(:+)
      unique_items = unique_item_trans.values
      unique_item_count = unique_items.inject(:+)
      transaction_count = transactions.keys.count

      @days = daily_revenue_hash.keys
      @daily_revenue = daily_revenue_hash.values
      @daily_purchases = daily_purchases_hash.values

      @avg_num_items_per_trans = item_count / transactions.count
      @avg_num_pur_per_user = transaction_count / users
      @avg_num_items_per_user = item_count / users
      @avg_items_per_trans = item_count / transaction_count
      @avg_uniq_items_per_trans = unique_item_count / transaction_count
      @avg_total_per_trans = total_revenue / purchases.length
    else
      @avg_num_items_per_trans = 0
      @avg_num_pur_per_user = 0
      @avg_num_items_per_user = 0
      @avg_items_per_trans = 0
      @avg_uniq_items_per_trans = 0
      @avg_total_per_trans = 0
    end
  end

  def session_data(session_metrics, session_dimensions)
    Google::Auth::ServiceAccountCredentials.new
    analytics = Google::Apis::AnalyticsV3::AnalyticsService.new
    scope = ['https://www.googleapis.com/auth/analytics.readonly']
    analytics.authorization = Google::Auth.get_application_default(scope)
    analytics.authorization.fetch_access_token!

    view_id = ENV["view_id"]
    start_date = '2017-01-01'
    end_date = 'yesterday'
    metrics = session_metrics
    # filters = 'ga:campaign==buy_me_now'
    dimensions = {
      dimensions: session_dimensions
      # filters: filters
    }

    analytics_service = analytics.get_ga_data(view_id, start_date, end_date, metrics, dimensions)
    analytics_service.rows
  end

  def os_device_data
    os_data = self.session_data('ga:sessionDuration,ga:itemRevenue', 'ga:operatingSystem,ga:operatingSystemVersion, ga:mobileDeviceInfo')

    @os_version_trans = Hash.new 0
    @device_type_trans = Hash.new 0
    @os_version_rev = Hash.new 0
    @device_type_rev = Hash.new 0

    os_data.each do |row|
      @os_version_trans["#{row[0]} #{row[1]}"] += 1
      @device_type_trans["#{row[2]}"] += 1
      if row[4]
        @os_version_rev["#{row[0]} #{row[1]}"] += row[4].to_f
        @device_type_rev["#{row[2]}"] += row[4].to_f
      else
        @os_version_rev["#{row[0]} #{row[1]}"] = 0
        @device_type_rev["#{row[2]}"] = 0
      end
    end
  end

  def duration_data
    os_data = self.session_data('ga:sessions,ga:sessionDuration', 'ga:operatingSystem, ga:operatingSystemVersion, ga:mobileDeviceInfo')

    @os_version_dur = Hash.new 0
    @device_type_dur = Hash.new 0

    os_data.each do |row|
      @os_version_dur["#{row[0]} #{row[1]}"] += (row[4].to_f / row[3].to_f).round(2)
      @device_type_dur["#{row[2]}"] += (row[4].to_f / row[3].to_f).round(2)
    end
  end

  def location_data
    purchase_data = self.session_data('ga:itemRevenue,ga:itemQuantity', 'ga:transactionId,ga:country')
    purchase_hash = Hash.new 0
    purchase_hash["Country"] = "Visits"
    purchase_data.each { |row| purchase_hash["#{row[1]}"] += 1 }
    @country_purchases = purchase_hash.to_a

    country_revenue = self.session_data('ga:itemRevenue', 'ga:country')
    @country_revenue = country_revenue.to_h
  end

end
