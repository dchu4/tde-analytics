class AddPurchaseIdToVisit < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :purchase_id, :integer
  end
end
