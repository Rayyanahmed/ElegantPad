class Note < ActiveRecord::Base
	belongs_to :notebook
	has_one :owner, through: :notebook, source: :owner

	validates :title, :notebook_id, presence: true

	has_many :taggings, class_name: :Tagging, foreign_key: :note_id 
	has_many :tags, through: :taggings, source: :tag
end
