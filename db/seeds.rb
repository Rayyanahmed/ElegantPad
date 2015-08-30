# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Note.destroy_all
Notebook.destroy_all
User.destroy_all

guest = User.create(email: "guest", password: "password")

10.times do 
	guest.notebooks.create(title: Faker::Lorem.word)
end

15.times do 
	notebook = guest.notebooks.sample
	content = 8 * (Faker::Lorem.paragraph)
	notebook.notes.create(title: Faker::Lorem.word, content: content)
end