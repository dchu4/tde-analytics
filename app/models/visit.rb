class Visit < ApplicationRecord
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode  # auto-fetch address

  belongs_to :user
  belongs_to :product

  def address
    [].compact.join(',')
  end
end
