class ChartBroadcastJob < ApplicationJob
  queue_as :default

  def perform
    ActionCable.server.broadcast "chart_channel", {}
  end

end
