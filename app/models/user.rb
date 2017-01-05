class User < ApplicationRecord
  has_many :visits
  has_many :purchases, through: :visits
end
