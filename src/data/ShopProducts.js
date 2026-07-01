const shopProducts = [
  {
    id: 1,
    name: "iPhone 15",
    specs: "128GB Storage, A16 Bionic",
    price: 799,
    image: "https://i.pinimg.com/1200x/a8/7c/93/a87c93b067cfb697e477fbf8039d64fc.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    specs: "256GB Storage, AMOLED Display",
    price: 899,
    image: "https://i.pinimg.com/736x/5f/3a/67/5f3a673f83e1d3088b1b112d90b539cd.jpg"
  },
  {
    id: 3,
    name: "AirPods Pro",
    specs: "Active Noise Cancellation",
    price: 249,
    image: "https://i.pinimg.com/736x/88/12/28/88122855d4faa222a3c0ebb2c33e6726.jpg"
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    specs: "GPS, Fitness Tracking",
    price: 399,
    image: "https://i.pinimg.com/1200x/27/a3/21/27a32121cea099dec843e91095247824.jpg"
  },
  {
    id: 5,
    name: "MacBook Air M2",
    specs: "13-inch, 8GB RAM",
    price: 1199,
    image: "https://i.pinimg.com/1200x/25/c3/a8/25c3a8ec425f78fbd8383d2e6ebd62bd.jpg"
  },
  {
    id: 6,
    name: "JBL Flip 6",
    specs: "Portable Bluetooth Speaker",
    price: 129,
    image: "https://i.pinimg.com/1200x/77/f4/80/77f4809840d68a6cc2dd9ea472a1b0e0.jpg"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    specs: "Wireless Noise Cancelling",
    price: 349,
    image: "https://i.pinimg.com/736x/d1/88/c9/d188c9a18f0b55512b28f3eedc006886.jpg"
  },
  {
    id: 8,
    name: "iPad Air",
    specs: "10.9-inch Retina Display",
    price: 599,
    image: "https://i.pinimg.com/1200x/63/1a/b7/631ab75b5e5bb444676115a2cc9d84a0.jpg"
  },
  {
    id: 9,
    name: "Dell XPS 13",
    specs: "Intel i7, 16GB RAM",
    price: 1299,
    image: "https://i.pinimg.com/1200x/39/99/d1/3999d15be25d721a1937f0621c5b1a65.jpg"
  },
  {
    id: 10,
    name: "Logitech MX Master 3",
    specs: "Wireless Productivity Mouse",
    price: 99,
    image: "https://i.pinimg.com/736x/c4/92/a0/c492a0edfef580786969d8a7611fc06b.jpg"
  },
  {
    id: 11,
    name: "Solakaka Mechanical Keyboard",
    specs: "RGB Backlit, Blue Switches",
    price: 89,
    image: "https://i.pinimg.com/1200x/47/3b/fa/473bfa425a2e728b1a75b638eb0d70fc.jpg"
  },
  {
    id: 12,
    name: "GoPro Hero 12",
    specs: "5.3K Action Camera",
    price: 399,
    image: "https://i.pinimg.com/736x/95/f0/a2/95f0a29ad695bad620993af6668da6b3.jpg"
  },
  {
    id: 13,
    name: "Canon EOS R50",
    specs: "Mirrorless Camera",
    price: 899,
    image: "https://i.pinimg.com/1200x/3b/b9/ce/3bb9cec62a86e4cde3e8aaac2cbc35dd.jpg"
  },
  {
    id: 14,
    name: "Samsung Smart TV",
    specs: "55-inch 4K UHD",
    price: 699,
    image: "https://i.pinimg.com/736x/a2/9b/c1/a29bc1a66f16a16301e556ac80fd4083.jpg"
  },
  {
    id: 15,
    name: "PlayStation 5",
    specs: "1TB SSD Gaming Console",
    price: 499,
    image: "https://i.pinimg.com/1200x/52/ef/ae/52efaed2611238ba2f69576835391f3c.jpg"
  },
  {
    id: 16,
    name: "Xbox Series X",
    specs: "1TB SSD Gaming Console",
    price: 499,
    image: "https://i.pinimg.com/1200x/aa/02/5c/aa025c3a567c30d22ceb5e0956852c28.jpg"
  },
  {
    id: 17,
    name: "Nintendo Switch OLED",
    specs: "Portable Gaming Console",
    price: 349,
    image: "https://i.pinimg.com/1200x/b5/b5/fa/b5b5facd801697b37d83c37bccb1e930.jpg"
  },
  {
    id: 18,
    name: "Amazon Echo Dot",
    specs: "Smart Speaker with Alexa",
    price: 49,
    image: "https://i.pinimg.com/1200x/74/b1/32/74b132e97df7df6ec3a19c0718a12749.jpg"
  },
  {
    id: 19,
    name: "Ring Video Doorbell",
    specs: "1080p HD Video",
    price: 99,
    image: "https://i.pinimg.com/1200x/69/15/8f/69158ff639d417c9061e81ca0cd02631.jpg"
  },
  {
    id: 20,
    name: "Ambrane Power Bank",
    specs: "10000mAh Fast Charging",
    price: 59,
    image: "https://i.pinimg.com/1200x/14/75/da/1475dadd2b037f3850fa59e4c7a688ab.jpg"
  },
  {
    id: 21,
    name: "Mi Smart Band 8",
    specs: "Fitness Tracker",
    price: 49,
    image: "https://i.pinimg.com/736x/55/da/e1/55dae142b5eeaae5a2f5c59b3e6ca1a8.jpg"
  },
  {
    id: 22,
    name: "HP Pavilion Laptop",
    specs: "Ryzen 7, 16GB RAM",
    price: 899,
    image: "https://i.pinimg.com/1200x/37/a5/d9/37a5d9176469c76a0ab1453235488c55.jpg"
  },
  {
    id: 23,
    name: "Asus ROG Gaming Laptop",
    specs: "RTX 4060, 16GB RAM",
    price: 1499,
    image: "https://i.pinimg.com/1200x/b4/01/aa/b401aa485f015d0e62242f52f805ee3c.jpg"
  },
  {
    id: 24,
    name: "Marshal Speaker",
    specs: "50W Portable Bluetooth Speaker",
    price: 149,
    image: "https://i.pinimg.com/1200x/eb/f7/99/ebf79994be9ae551fe70a36780808b98.jpg"
  },
  {
    id: 25,
    name: "Samsung Z fold 5",
    specs: "1TB Storage, Fold Display",
    price: 139,
    image: "https://i.pinimg.com/1200x/ae/5d/f0/ae5df0f53f2afd61f7b161d7e9e0c01e.jpg"
  },
  {
    id: 26,
    name: "Apple Magic Mouse",
    specs: "Multi-Touch Surface",
    price: 79,
    image: "https://i.pinimg.com/1200x/d7/f9/9f/d7f99f24519249ee6d933afc41dc752d.jpg"
  },
  {
    id: 27,
    name: "Samsung T7 SSD",
    specs: "1TB Portable SSD",
    price: 109,
    image: "https://i.pinimg.com/1200x/a2/09/83/a20983608a0a8a50af3b2788bd9cacf4.jpg"
  },
  {
    id: 28,
    name: "Boat Airdopes 183",
    specs: "True Wireless, IPX4 rated ",
    price: 69,
    image: "https://i.pinimg.com/736x/d5/0d/a7/d50da7cd7bb101c356c7278005e1c00b.jpg"
  },
  {
    id: 29,
    name: "Portronics Mport",
    specs: "One USB C Hub (9-in-1)",
    price: 199,
    image: "https://i.pinimg.com/736x/38/90/18/389018959084722914083985fdb1db6f.jpg"
  },
  {
    id: 30,
    name: "Adjustable Laptop Stand",
    specs: "With 360 Rotating",
    price: 19,
    image: "https://i.pinimg.com/1200x/71/69/de/7169de0359cbe35df3462b480ea16b0d.jpg"
  }
]

export default shopProducts