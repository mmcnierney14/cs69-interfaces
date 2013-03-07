class CreateAutocompleteData < ActiveRecord::Migration
  def up
    create_table :autocomplete_data do |t|
      t.string :username
      t.string :friends
    end
  end

  def down
    drop_table :autocomplete_data
  end
end
