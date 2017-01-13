class RenameDeviceTypeFromUserAndRemoveLatLonTimeFromVisit < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :device_type, :device_model
    remove_column :visits, :latitude, :float
    remove_column :visits, :longitude, :float
    remove_column :visits, :time, :datetime
  end
end
 