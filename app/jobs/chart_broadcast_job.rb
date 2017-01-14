class ChartBroadcastJob < ApplicationJob
  # queue_as :default

  def perform
    # Do something later
    ActionCable.server.broadcast "chart_channel", {}
  end
end
