class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :product_number
      t.string :product_name
      t.string :retailer
      t.string :url

      t.timestamps
    end
  end
end
