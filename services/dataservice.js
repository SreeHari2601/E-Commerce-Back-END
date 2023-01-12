// get all shoes 
const db = require("./db")

const getAllShoes = () => {
    return db.product.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                }
            } else {
                return {
                    statusCode: 404,
                    result: "Failed To Fetch the Data"
                }
            }
        })
}

const getAllMens = () => {
    return db.menproduct.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                }
            } else {
                return {
                    statusCode: 404,
                    result: "Failed To Fetch the Data"
                }
            }
        })
}

const getAllWomens = () => {
    return db.womenproduct.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                }
            } else {
                return {
                    statusCode: 404,
                    result: "Failed To Fetch the Data"
                }
            }
        })
}

const addToWishList = (id, title, description, image, category, price) => {
    return db.Wishlist.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "Product Is Already In the WishList"
            }
        } else {
            const newProduct = new db.Wishlist({
                id,
                title,
                price: "",
                description,
                category,
                image,
            })
            newProduct.save()
            return {
                statusCode: 200,
                message: "Product Successfully Added To Your WishList"
            }
        }
    })
}

const addToWishListWomen = (id, title, description, image, category, price) => {
    return db.Wishlistwomen.findOne({
        id
    }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 404,
                    message: "Product Already Exist In Wishlist"
                }
            } else {
                const newProductWomen = new db.Wishlistwomen({
                    id,
                    title,
                    price:"",
                    description,
                    category,
                    image,
                })
                newProductWomen.save()

                return {
                    statusCode:200,
                    message : "Product added successfully to your WishList"
                }
            }
        }
    )
}

 const deleteItemWishListWomen =(id)=>{
  return db.Wishlistwomen.deleteOne({
    id
  }).then (
    (data)=>{
        if(data) {
            // return {
            //     statusCode:200,
            //     message :"Product removed From Your WishList"
            // }
            return db.Wishlistwomen.find()
            .then((data) => {
                if (data) {
                    return {
                        statusCode: 200,
                        wishList: data,
                        message :"Product successfully Removed"
                    }
                } else {
                    return {
                        statusCode: 404,
                        result: "Your WishList Is Empty"
                    }
                }
            })
        } else {
            return {
                statusCode :404,
                message : "Product Not Available"
            }
        }
    }
    )
}

const getToWishListWomen = ()=>{
    return db.Wishlistwomen.find()
    .then((data) => {
        if (data) {
            return {
                statusCode: 200,
                result: data
            }
        } else {
            return {
                statusCode: 404,
                result: "Your WishList Is Empty"
            }
        }
    })
}


const getWishList = () => {
    return db.Wishlist.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                }
            } else {
                return {
                    statusCode: 404,
                    result: "Your WishList Is Empty"
                }
            }
        })
}

const deleteItemWishList = (id) => {
    return db.Wishlist.deleteOne({
        id
    }).then(
        (data) => {
            if (data) {
                // return {
                //     statusCode: 200,
                //     message: "Product is removed From your WishList"
                // }
                return db.Wishlist.find()
                .then((data) => {
                if (data) {
                return {
                    statusCode: 200,
                    wishListM: data,
                    message: "Product is removed From your WishList"
                }
                } else {
                return {
                    statusCode: 404,
                    result: "Your WishList Is Empty"
                }
            }
        })
            } else {
                return {
                    statusCode: 404,
                    message: "Product Not Available "
                }
            }
        }
    )

}


const addToWishListMen = (id, title, description, image, category, price)=>{
  return db.WishListmen.findOne({
    id
  }).then((result)=>{
    if (result) {
        return {
             statusCode:404,
             message:"Product Already Exist in the Wishlist"
        }
    }else {
        const newProductMen =  new db.WishListmen ({
            id,
            title,
            price:"",
            description,
            category,
            image,
        })
        newProductMen.save()
        return {
            statusCode : 200,
            message: "Product succesfully added to your wishlist"
        }
    } 
  })
}
const getToWishListMen = ()=>{
    return db.WishListmen.find().then((data)=>{
      if (data) {
          return {
               statusCode:200,
               result :data
          }
      }else {
          return {
              statusCode : 404,
              message: "Your WishList is Empty"
          }
      } 
    })
  }


  const deleteToWishListMen =(id)=>{
   return db.WishListmen.deleteOne({
    id
   }).then ((data)=>{
    if (data) {
        // return {
        //     statusCode : 200,
        //     message : "Product removed from wishlist"
        // }
        return db.WishListmen.find().then((data)=>{
            if (data) {
                return {
                     statusCode:200,
                     wishList :data,
                     message : "Product removed from wishlist"
                }
            }else {
                return {
                    statusCode : 404,
                    message: "Your WishList is Empty"
                }
            } 
          })
    } else {
        return {
            statusCode :404,
            message : "Product not available"
        }
    }
   })
  }

  const login = (uname,pswd)=>{
   return db.Account.findOne({
        username:uname,
        password:pswd
    }).then((result)=>{
        if(result) {
           return {
            status:true,
            statusCode:200,
            message: "Login Successfull"
           }
        } else {
            return {
                status:false,
                statusCode:404,
                message :"invalid Credentials"
            }
        }
    })
  }

module.exports = {
    getAllShoes,
    addToWishList,
    getWishList,
    deleteItemWishList,
    getAllMens,
    getAllWomens,
    addToWishListWomen,
    getToWishListWomen,
    deleteItemWishListWomen,
    addToWishListMen,
    getToWishListMen,
    deleteToWishListMen,
    login
}