class Notebook < ActiveRecord::Base
	belongs_to :owner, foreign_key: :owner_id, class_name: :User
	has_many :notes

	validates :title, :owner_id, presence: true
end
