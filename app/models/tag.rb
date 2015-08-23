class Tag < ActiveRecord::Base
  validates :title, presence: true 
  validates :title, uniqueness: true 
  has_many :taggings, class_name: :Tagging, foreign_key: :tag_id
  has_many :notes, through: :taggings, source: :note 
end
