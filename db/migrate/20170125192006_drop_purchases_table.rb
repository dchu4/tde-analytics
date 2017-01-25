class DropPurchasesTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :purchases
    add_column :products, :product_sku, :string
  end
end
