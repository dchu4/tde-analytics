class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.string :user_id
      t.string :product_id
      t.datetime :time
      t.string :ip

      t.timestamps
    end
  end
end
