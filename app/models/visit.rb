class Visit < ApplicationRecord
  after_create_commit { ChartBroadcastJob.perform }

  belongs_to :user
  belongs_to :product
end
