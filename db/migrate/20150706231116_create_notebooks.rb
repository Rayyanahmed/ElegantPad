class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false

      t.timestamps null: false
    end
    add_index :notebooks, :owner_id
  end
end
