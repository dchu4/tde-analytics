class Visit < ApplicationRecord
  belongs_to :user
  belongs_to :product

  after_create_commit { ChartBroadcastJob.perform_last }
end
