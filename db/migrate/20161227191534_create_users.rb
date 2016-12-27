class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :device_type
      t.string :device_os
      t.string :device_unique_id

      t.timestamps
    end
  end
end
