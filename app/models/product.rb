class Product < ApplicationRecord
  has_many :visits
  has_many :users, through: :visits
  has_many :purchases, through: :visits
end
