 const sampleListings = [
  {
      "title": "Wireless Bluetooth Headphones",
      "price": 59.99,
      "price1" : 500,
      "price2": 700,
      "Image": "https://images.meesho.com/images/products/446398765/v3xz6_512.webp",
      "description": "High-quality wireless headphones with noise cancellation and long battery life."
  },
  {
      "title": "Smart LED TV 55\" 4K UHD",
      "price": 499.99,
      "price1" : 500,
      "Image": "https://rukminim2.flixcart.com/image/750/900/xif0q/television/b/o/2/55x75l-kd-55x75l-sony-original-imahyehgv5z27qjp.jpeg?q=20&crop=false",
      "description": "Experience vibrant colors and amazing clarity with this 55-inch 4K UHD smart LED TV."
  },
  {
      "title": "Portable Bluetooth Speaker",
      "price": 25.99,
      "price1" : 500,
      "Image": "https://s.yimg.com/ny/api/res/1.2/iY.VYvm8ZcHAO.VWeHHJtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2024-04/7373a7a0-f739-11ee-b9f7-4be4e47294ab",
      "description": "Compact and powerful Bluetooth speaker with crystal-clear sound and deep bass."
  },
  {
      "title": "Gaming Laptop 15\" with RTX 3060",
      "price": 1299.99,
      "price1" : 500,
      "Image": "https://rukminim2.flixcart.com/image/850/1000/l55nekw0/computer/l/o/w/victus-gaming-laptop-hp-original-imagfw5txushdp5r.jpeg?q=90&crop=false",
      "description": "High-performance gaming laptop with a 15-inch display, powered by an NVIDIA RTX 3060 GPU."
  },
  {
      "title": "Smartphone with Triple Camera",
      "price": 699.99,
      "price1" : 500,
      "Image": "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/03/3-photoutils.com_.jpeg?ssl=1",
      "description": "Advanced smartphone featuring a triple camera system for stunning photos and videos."
  },
  {
      "title": "Smart Watch with Heart Rate Monitor",
      "price": 149.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/12e11454-5b40-4e02-81e3-1da51cbfb28c._CR0,0,1200,628_SX430_QL70_.png",
      "description": "Stay connected and track your health with this stylish smartwatch with heart rate monitoring."
  },
  {
      "title": "4K Action Camera",
      "price": 89.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/51QVcwAI4hL._SL1000_.jpg",
      "description": "Capture every adventure in 4K resolution with this rugged and waterproof action camera."
  },
  {
      "title": "Mechanical Gaming Keyboard",
      "price": 49.99,
      "price1" : 500,
      "Image": "https://assets3.razerzone.com/bWlfJPfMjcCdmBXQSf1q6zTT2EM=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh96%2Fh53%2F9818561708062%2F240924-bw-v4-pro-75-black-1500x1000-4.jpg",
      "description": "RGB mechanical keyboard with customizable backlighting and responsive keys for gamers."
  },
  {
      "title": "Ergonomic Office Chair",
      "price": 129.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/61qix355YLL._SX569_.jpg",
      "description": "Comfortable and supportive ergonomic chair designed for long hours of productivity."
  },
  {
      "title": "Electric Toothbrush with Timer",
      "price": 39.99,
      "price1" : 500,
      "Image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROObVgQGgiPrgbBLHnpQ8-mSGgsVFQMsO81ERptECLlOCvbiQ5wxl-CCP3m3vixdrs2rM_7qA_4AUoiqI9-sW0-GpJ1byGjQM19Owg-6I",
      "description": "Rechargeable electric toothbrush with a 2-minute timer for optimal oral care."
  },
  {
      "title": "Smart Home Security Camera",
      "price": 89.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/51n6PD7xV-L._SY450_.jpg",
      "description": "High-definition security camera with night vision and motion detection for home safety."
  },
  {
      "title": "Adjustable Dumbbell Set",
      "price": 79.99,
      "price1" : 500,
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHOFXyecYUk1OCXR8Yhj8IwWKT5cHII4WMQ&s",
      "description": "Compact adjustable dumbbell set perfect for strength training at home."
  },
  {
      "title": "Air Purifier with HEPA Filter",
      "price": 99.99,
      "price1" : 500,
      "Image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQosktgqiXIeX22peGY0t6hPfY_CsTWrmsIAxrGWaHM1AekIbcRIKHNMgsCpQFc9V3LW_9gVyNBYusYG3POXoE5-7LScWBmi0LREVCdGAO5",
      "description": "Efficient air purifier with HEPA filter to remove dust, allergens, and pollutants."
  },
  {
      "title": "Instant Pot Multi-Cooker",
      "price": 89.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/81SQ-TvA+2L._SX569_.jpg",
      "description": "7-in-1 electric pressure cooker for fast and easy cooking at home."
  },
  {
      "title": "Stainless Steel Water Bottle",
      "price": 19.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/815-5aiak3L._SX569_.jpg",
      "description": "Durable, leak-proof stainless steel water bottle that keeps drinks cold for hours."
  },
  {
      "title": "Cordless Vacuum Cleaner",
      "price": 199.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/610WJrBNrEL._SL1080_.jpg",
      "description": "Lightweight cordless vacuum cleaner with powerful suction and long battery life."
  },
  {
      "title": "Smart Light Bulb Pack",
      "price": 29.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/61koIjipAyL._SL1000_.jpg",
      "description": "Smart light bulbs with adjustable brightness and color, compatible with Alexa and Google Home."
  },
  {
      "title": "Electric Kettle with Temperature Control",
      "price": 49.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/61egRKGJ6FL._SL1000_.jpg",
      "description": "Electric kettle with adjustable temperature settings for brewing different types of tea."
  },
  {
      "title": "Digital Kitchen Scale",
      "price": 14.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/71OoatX6KNL._SX466_.jpg",
      "description": "Precise digital kitchen scale for accurate measurements when cooking and baking."
  },
  {
      "title": "Yoga Mat with Carrying Strap",
      "price": 24.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/71reOiNZrfL._SX569_.jpg",
      "description": "Non-slip yoga mat with a carrying strap, perfect for yoga and pilates."
  },
  {
      "title": "Electric Standing Desk",
      "price": 399.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/91igJGVyn1L._SX569_.jpg",
      "description": "Adjustable electric standing desk for ergonomic workspace setup."
  },
  {
      "title": "Noise-Canceling Earbuds",
      "price": 79.99,
      "price1" : 500,
      "Image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVk5LaKONeWTBDyWQl_Kv3R8mVVx4uM0aZFydQ9fuYXdxVahEGJQHaMsdWVPU4dT__I-68mVVVS_G-MCiVE4LcfAdlbmcmGkTQuxWo3m-bDDbtYKpUrgZalA",
      "description": "Compact, comfortable noise-canceling earbuds with high-quality sound."
  },
  {
      "title": "Pet Camera with Treat Dispenser",
      "price": 149.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/71-vHhctZ8L.jpg",
      "description": "Keep an eye on your pet and reward them with treats using this pet camera."
  },
  {
      "title": "Cordless Drill Set",
      "price": 89.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/81lkyBt9cmL._SX466_.jpg",
      "description": "Powerful cordless drill set with rechargeable battery and multiple drill bits."
  },
  {
      "title": "Portable Air Compressor",
      "price": 34.99,
      "price1" : 500,
      "Image": "https://d1u9153gczvvuy.cloudfront.net/wp-content/uploads/2022/07/m1_compressors_thumbnail.jpg",
      "description": "Compact air compressor for inflating tires, balls, and other inflatables."
  },
  {
      "title": "Smart Thermostat",
      "price": 199.99,
      "price1" : 500,
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrdKqiKFnnTYf_2zRYeI18LPacgw2Bb3cBw&s",
      "description": "Smart thermostat with programmable features to control your home’s temperature remotely."
  },
  {
      "title": "Electric Coffee Grinder",
      "price": 29.99,
      "price1" : 500,
      "Image": "https://i.ytimg.com/vi/hfhWYd_m0yg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD2OuzyADBYJDwcZxSuCDInkv6qg",
      "description": "Electric coffee grinder with adjustable settings for coarse and fine grinds."
  },
  {
      "title": "Anti-Fatigue Kitchen Mat",
      "price": 19.99,
      "price1" : 500,
      "Image": "https://m.media-amazon.com/images/I/91j08LUu6HL.jpg",
      "description": "Soft anti-fatigue mat designed for comfort while standing in the kitchen."
  },
  {
      "title": "Portable Power Bank 10000mAh",
      "price": 24.99,
      "price1" : 500,
      "Image": "https://ovista.in/cdn/shop/files/portablepowerbank_2048x2048.png?v=1722665917",
      "description": "Compact and lightweight power bank with fast-charging capabilities for your devices."
  },
  {
      "title": "Non-Stick Frying Pan",
      "price": 29.99,
      "price1" : 500,
      "Image": "https://images-cdn.ubuy.co.in/65233fe537df275d5852c3c0-amazon-basics-3-piece-non-stick-frying.jpg",
      "description": "Durable non-stick frying pan for easy cooking and cleaning."
  }
]

  
  module.exports = { data: sampleListings };