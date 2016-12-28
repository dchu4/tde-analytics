# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# 20.times do |device_id|
#   User.create(
#       device_type: "Nexus 4",
#       device_os: "Android",
#       device_unique_id: "123-123-#{device_id}"
#     )
# end

# 10.times do |product_id|
#   Product.create(
#       product_number: "QAZ-#{product_id}",
#       product_name: "Item-#{product_id}",
#       retailer: "MyStuff",
#       url: "www.mystuff.com/products/QAZ-#{product_id}"
#     )
# end

20.times do |user_id|
  10.times do |product_id|
    Visit.create(
        user_id: (user_id + 1),
        product_id: (product_id + 1),
        time: Time.now,
        ip: "50.200.5.113",
        country: "location.country",
        city: "location.city",
        state: "location.state",
        postal_code: "location.postal_code"
      )
  end
end
