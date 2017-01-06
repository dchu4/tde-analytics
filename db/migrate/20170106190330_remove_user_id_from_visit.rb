class RemoveUserIdFromVisit < ActiveRecord::Migration[5.0]
  def change
    remove_column :visits, :user_id, :string
    remove_column :visits, :product_id, :string
  end
end
