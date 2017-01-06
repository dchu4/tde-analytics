class UsersController < ApplicationController
  def create
    User.create(
        device_type: params[:device_type],
        device_os: params[:device_os],
        device_unique_id: params[:device_unique_id]
      )
  end

  def show
    @user = User.find(params[:id])
  end
end
