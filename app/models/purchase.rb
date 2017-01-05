class Purchase < ApplicationRecord
  belongs_to :visit
  has_one :user, through: :visit
end
