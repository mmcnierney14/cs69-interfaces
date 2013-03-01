class CreateDatabase < ActiveRecord::Migration
  def self.up
    create_table :password_data do |t|
      t.string :username
      t.string :password
      t.string :password_confirm
      t.integer :error_count
    end
  end

  def self.down
    drop_table :password_data
  end
end
