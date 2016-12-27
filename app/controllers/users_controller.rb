class UsersController < ApplicationController
  def create
    if(!User.find_by(params[:device_unique_id]))
      User.create(
          device_type: params[:device_type],
          device_os: params[:device_os],
          device_unique_id: params[:device_unique_id]
        )
    end
  end

  def show
    @user = User.find(params[:id])
  end
end
