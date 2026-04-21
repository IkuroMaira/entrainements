class CreateCoaches < ActiveRecord::Migration[8.0]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :email
      t.string :specialty

      t.timestamps
    end
  end
end
