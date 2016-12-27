class AddLatLonToVisit < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :lat, :float
    add_column :visits, :lon, :float
  end
end
