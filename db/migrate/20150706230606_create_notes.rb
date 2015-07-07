class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :notebook_id
      t.string :title, default: "Untitled"
      t.text :content

      t.timestamps null: false
    end
    add_index :notes, :notebook_id 
  end
end
