class Note < ActiveRecord::Base
	belongs_to :notebook
	has_one :owner, through: :notebook, source: :owner

	validates :title, :notebook_id, presence: true
end
