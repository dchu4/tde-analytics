class User < ApplicationRecord
  has_many :visits
  has_many :products, through: :visits
end
