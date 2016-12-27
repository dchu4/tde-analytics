class RenameLatLonInVisit < ActiveRecord::Migration[5.0]
  def change
    rename_column :visits, :lat, :latitude
    rename_column :visits, :lon, :longitude
  end
end
