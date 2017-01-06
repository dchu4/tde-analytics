class Product < ApplicationRecord
  has_many :visits
  has_many :purchases
end
