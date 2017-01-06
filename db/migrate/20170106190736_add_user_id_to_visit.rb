class AddUserIdToVisit < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :user_id, :integer
    add_column :visits, :product_id, :integer
  end
end
