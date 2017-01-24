module PagesHelper
  def get_data(results_date)
    ENV["GOOGLE_APPLICATION_CREDENTIALS"] = "#{Rails.root}/app/assets/keys/rezidekey.json"
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
end
