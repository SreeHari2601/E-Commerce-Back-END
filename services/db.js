const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/onlineStore', ()=>{
    console.log("MongoDB connected Successfully");
})

 const product = mongoose.model('product', {
    
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        rating: {
          rate: Number,
          count: Number
        }
      
} )

const Wishlistwomen = mongoose.model('Wishlistwomen', {
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
} )

const menproduct = mongoose.model('menproduct', {
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  
} )

const womenproduct = mongoose.model('womenproduct', {
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  
} )

const Wishlist = mongoose.model('Wishlist', {
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
} )

const WishListmen = mongoose.model('Wishlistmen', {
    
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
} )


const Account = mongoose.model('Account',{
  username:String,
  password:String
})


module.exports = {
    product,
    Wishlist,
    menproduct,
    womenproduct,
    Wishlistwomen,
    WishListmen,
    Account
  
}