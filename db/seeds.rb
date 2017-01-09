# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

6.times do |device_id|
  User.create(
      device_unique_id: "OKLQ-RF-#{device_id}",
      device_type: "Nexus 5X",
      device_os: "Android OS 7.0"
    )
end

4.times do |device_id|
  User.create(
      device_unique_id: "ROQS-RF-#{device_id}",
      device_type: "iPhone 7",
      device_os: "iOS 10"
    )
end

3.times do |device_id|
  User.create(
      device_unique_id: "PESQ-RF-#{device_id}",
      device_type: "Nexus 5",
      device_os: "Android OS 7.0"
    )
end

7.times do |device_id|
  User.create(
      device_unique_id: "ILSK-RF-#{device_id}",
      device_type: "iPhone 6",
      device_os: "iOS 10"
    )
end

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

# 20.times do |user_id|
#   10.times do |product_id|
#     Visit.create(
#         user_id: (user_id + 1),
#         product_id: (product_id + 1),
#         time: Time.now,
#         ip: "50.200.5.113",
#         country: "location.country",
#         city: "location.city",
#         state: "location.state",
#         postal_code: "location.postal_code"
#       )
#   end
# end

Product.create(
    product_number: "123.456.1",
    product_name: "Cuisinart Hot Air Popcorn Make",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/cuisinart-hot-air-popcorn-maker/s332553"
  )

Product.create(
    product_number: "123.456.2",
    product_name: "Scalloped Melamine Popcorn Tub",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/scalloped-melamine-popcorn-tub/s389640?st=Scalloped%20Melamine%20Popcorn%20Tub&ta=scalloped"
  )

Product.create(
    product_number: "123.456.3",
    product_name: "Chefn Pop Top Microwave Popcorn Popper",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/chefn-pop-top-microwave-popcorn-popper/s529564?st=Chef%27n%20%C2%AE%20Pop%20Top%20Microwave%20Popcorn%20Popper&ta=poptop"
  )

Product.create(
    product_number: "123.456.4",
    product_name: "Pilsner Beer Glass",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/direction-17-oz.-pilsner-beer-glass/s569143?st=Direction%2017%20oz.%20Pilsner%20Beer%20Glass&ta=direction%20pilsner%20beer"
  )

Product.create(
    product_number: "123.456.5",
    product_name: "Stovetop Popcorn Popper Black",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/stovetop-popcorn-popper-black/s497401"
  )

Product.create(
    product_number: "123.456.6",
    product_name: "Red Spatterware Spouted Bowls Set Of 2",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/red-spatterware-spouted-bowls-set-of-2/s133564?st=Red%20Spatterware%20Spouted%20Bowls%20Set%20of%202&ta=set%20of%202%20red"
  )

Product.create(
    product_number: "123.456.7",
    product_name: "Set Of 4 Iittala Krouvi Beer Mugs",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/set-of-4-iittala-krouvi-beer-mugs/s579044?st=Set%20of%204%20Iittala%20Krouvi%20Beer%20Mugs&ta=littala"
  )

Product.create(
    product_number: "123.456.8",
    product_name: "Can Glass",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/can-glass/s430391"
  )

Product.create(
    product_number: "123.456.9",
    product_name: "Zippy Pop Stovetop Popcorn Maker",
    retailer: "Crate & Barrel",
    url: "http://www.crateandbarrel.com/zippy-pop-stovetop-popcorn-maker/s643384?st=Zippy%20Pop%20Stovetop%20Popcorn%20Maker"
  )

# 10.times do
#     10.times do |index|
#         Purchase.create(
#             product_id: index + 1
#             )
#     end
# end

# 10.times do
    # 100.times do |index|
    #     Purchase.find(index + 1).update(
    #         user_id: rand(20) + 1
    #         )
    # end
# end