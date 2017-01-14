class ChartBroadcastJob < ApplicationJob
  queue_as :default

  def perform_last
    ActionCable.server.broadcast "chart_channel", {}
  end

end
