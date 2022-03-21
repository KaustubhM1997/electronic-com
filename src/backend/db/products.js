import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {

    // price range: 100 to 2000, step of 500
    _id: uuid(),
    title: "Casual Blue Shirt", 
    price: 599,
    rating: "3.7",
    categoryName: "Men",
    categoryImg: "https://media.istockphoto.com/photos/latin-man-standing-picture-id825083570?b=1&k=20&m=825083570&s=170667a&w=0&h=Pt9O2-RyYt84bumpiuy3KDUvaDIm--UYutUUnwBKVZM="
  },
  {
    _id: uuid(),
    title: "PS4 Gaming Controller",
    price: 1800,
    rating: "4.2",
    categoryName: "Best-sellers",
    categoryImg: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHM0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Beige Leather Handbag",
    price: 800,
    rating: "4.0",
    categoryName: "Women",
    categoryImg: "https://media.istockphoto.com/photos/beige-leather-women-handbag-isolated-on-white-background-picture-id1302787124?b=1&k=20&m=1302787124&s=170667a&w=0&h=e4dIzEN0FBxxR8KnRowKCJzZd-qpshaZAACcY2DWupM="
  },
  {
    _id: uuid(),
    title: "Lego Creator 3 in 1",
    price: 500,
    rating: "4.4",
    categoryName: "Kids",
    categoryImg: "https://images.unsplash.com/photo-1631106254201-ffbee2305c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxlZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Daily Sun Hat",
    price: 300,
    rating: "3.9",
    categoryName: "Kids",
    categoryImg: "https://media.istockphoto.com/photos/trendy-girl-in-hat-looking-away-picture-id1154728772?b=1&k=20&m=1154728772&s=170667a&w=0&h=hyPUUXhkVVpLXYTNMGZjw9N1SezkoqvomtCHEUvb8lg="
  },
  {
    _id: uuid(),
    title: "Clarks Brown Brogues",
    price: 1990,
    rating: "4.6",
    categoryName: "Men",
    categoryImg: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Wingo Guitar Capo",
    price: 250,
    rating: "3.5",
    categoryName: "Best-sellers",
    categoryImg: "https://media.istockphoto.com/photos/guitar-capo-on-white-background-picture-id1338869562?b=1&k=20&m=1338869562&s=170667a&w=0&h=VECG07t6iC_XvvVn3MJ3fZQAGopFGwINnU8h3ZXPnBY="
  },
  {
    _id: uuid(),
    title: "PopSocket Phone Grip",
    price: 120,
    rating: "2.9",
    categoryName: "Best-sellers",
    categoryImg: "https://media.istockphoto.com/photos/blank-black-and-white-pop-sockets-attached-on-mobile-phone-picture-id1151958738?b=1&k=20&m=1151958738&s=170667a&w=0&h=ih--9DNhSeBamgEgM5HGhalAdl2bJuWWxXprC2c941o="
  },
  {
    _id: uuid(),
    title: "Matte Lipstick set",
    price: 1500,
    rating: "3.9",
    categoryName: "Women",
    categoryImg: "https://images.unsplash.com/photo-1619352520578-8fefbfa2f904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Wrangler Regular Jeans",
    price: 486,
    rating: "3.7",
    categoryName: "Men",
    categoryImg: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Clarks Women's Breeze",
    price: 780,
    rating: "4.5",
    categoryName: "Women",
    categoryImg: "https://media.istockphoto.com/photos/sandals-on-grungy-wood-background-top-view-with-copy-space-picture-id681849298?b=1&k=20&m=681849298&s=170667a&w=0&h=TV-yXQyp-z4kgweMtzkopy3EZ0Ch6e5_yhg7eQga8bQ="
  },
  {
    _id: uuid(),
    title: "Castle Art Supplies",
    price: 385,
    rating: "4.3",
    categoryName: "Kids",
    categoryImg: "https://media.istockphoto.com/photos/close-up-color-pencils-isolated-on-white-picture-id514324300?b=1&k=20&m=514324300&s=170667a&w=0&h=ZvYF6HFxt0pOLYZGcNfLvLAHwM4BilxxUH4Jb238qLI="
  },
  {
    _id: uuid(),
    title: "Aristo Sketch Book",
    price: 525,
    rating: "4.7",
    categoryName: "Kids",
    categoryImg: "https://images.unsplash.com/photo-1623697899808-80f1a17372be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNrZXRjaCUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    _id: uuid(),
    title: "Women Fashion Glasses",
    price: 1700,
    rating: "4.5",
    categoryName: "Women",
    categoryImg: "https://media.istockphoto.com/photos/smiling-glasses-girl-in-park-picture-id854931274?b=1&k=20&m=854931274&s=170667a&w=0&h=YbQjeH7iQERW0gcSg7KDePThiZAsMMI1nALfUDp8Hvw="
  },
  {
    _id: uuid(),
    title: "Men Grooming Kit",
    price: 900,
    rating: "4.6",
    categoryName: "Men",
    categoryImg: "https://images.unsplash.com/photo-1621607505833-616916c46a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGdyb29taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];
