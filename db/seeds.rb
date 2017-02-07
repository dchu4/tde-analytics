# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
location = [{country: "Canada", city: "Toronto", state: "Ontario"},
            {country: "Canada", city: "Montreal", state: "Quebec"},
            {country: "China", city: "Beijing", state: "Hebei"},
            {country: "United States", city: "Chicago", state: "Illinois"},
            {country: "United States", city: "Fairfield", state: "California"},
            {country: "United States", city: "Berkeley", state: "California"},
            {country: "United States", city: "Houston", state: "Texas"},
            {country: "United States", city: "Kingsville", state: "Texas"},
            {country: "United States", city: "Kingston", state: "New York"}]

10.times do |device_mult|
  6.times do |device_id|
    User.create(
        device_unique_id: "OKLQ-RF-#{device_id}-#{device_mult}",
        device_model: "Nexus 5X",
        device_os: "Android OS 7.0"
      )
  end

  4.times do |device_id|
    User.create(
        device_unique_id: "ROQS-RF-#{device_id}-#{device_mult}",
        device_model: "iPhone 7",
        device_os: "iOS 10"
      )
  end

  3.times do |device_id|
    User.create(
        device_unique_id: "PESQ-RF-#{device_id}-#{device_mult}",
        device_model: "Nexus 5",
        device_os: "Android OS 7.0"
      )
  end

  7.times do |device_id|
    User.create(
        device_unique_id: "ILSK-RF-#{device_id}-#{device_mult}",
        device_model: "iPhone 6",
        device_os: "iOS 10"
      )
  end
end


300.times do |index|
  locationHolder = location[rand(9)]
  randomDates = rand(35) + 1

  Visit.create(
      country: locationHolder["country"],
      city: locationHolder["city"],
      state: locationHolder["state"],
      user_id: rand(200) + 1,
      product_id: rand(6) + 1,
      created_at: randomDates.days.ago
    )
end

Product.create(
    product_number: "123.456.1",
    product_name: "Desk Lamp",
    product_sku: "LA-237343",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/1"
  )

Product.create(
    product_number: "123.456.2",
    product_name: "Decorative Pillow",
    product_sku: "PI-243534",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/6"
  )

Product.create(
    product_number: "123.456.3",
    product_name: "Chair",
    product_sku: "CH-235345",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/2"
  )

Product.create(
    product_number: "123.456.4",
    product_name: "Bedside Lamp",
    product_sku: "LA-234863",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/3"
  )

Product.create(
    product_number: "123.456.5",
    product_name: "Arm Chair",
    product_sku: "AC-213325",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/4"
  )

Product.create(
    product_number: "123.456.6",
    product_name: "Drawer Chest",
    product_sku: "DC-125323",
    retailer: "Rezide",
    url: "http://rezide-store.herokuapp.com/products/5"
  )