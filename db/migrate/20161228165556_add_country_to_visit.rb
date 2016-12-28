class AddCountryToVisit < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :country, :string
    add_column :visits, :city, :string
    add_column :visits, :state, :string
    add_column :visits, :postal_code, :string
  end
end
