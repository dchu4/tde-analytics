class Visit < ApplicationRecord
  after_create_commit { ChartBroadcastJob.perform_last }

  belongs_to :user
  belongs_to :product
end
