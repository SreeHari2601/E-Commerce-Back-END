
const express = require ('express')  

const app = express();

const cors = require('cors')

const dataService = require ("./services/dataservice")

app.use(express.json())

app.use(cors ({
    origin :"http://localhost:4200"
}))

app.listen(3000,()=>{
    console.log("Server connected Succesfully");
})

app.get ("/shoes" , (req,res)=>{
 console.log("Inside getallshoe function ");
 dataService.getAllShoes().then((result)=>{
    res.status(result.statusCode).json(result)
 })
})

app.get ("/mens" , (req,res)=>{
    console.log("Inside getallMen function ");
    dataService.getAllMens().then((result)=>{
       res.status(result.statusCode).json(result)
    })
   })

   app.get ("/womens" , (req,res)=>{
    console.log("Inside getallwomen function ");
    dataService.getAllWomens().then((result)=>{
       res.status(result.statusCode).json(result)
    })
   })

app.post("/add-to-wishlist",(req,res)=>{
    console.log("inside wishlist Function");
    console.log(req.body);
    dataService.addToWishList(req.body.id,req.body.title,req.body.price,req.body.image,req.body.category,req.body.description)
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})

app.post("/add-to-wishlistWomen",(req,res)=>{
    console.log("inside wishlistWomen Function");
    console.log(req.body);
    dataService.addToWishListWomen(req.body.id,req.body.title,req.body.price,req.body.image,req.body.category,req.body.description)
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})

app.get("/get-wishlistWomen",(req,res)=>{
    console.log("inside getwishlistWomen Function");
    console.log(req.body);
    dataService.getToWishListWomen()
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})

app.delete ("/delete-wishlistwomen/:id",(req,res)=>{
    console.log("inside delete-wishlistWomen Function");
    dataService.deleteItemWishListWomen(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})

app.get("/get-wishlist",(req,res)=>{
    console.log("inside getwishlist Function");
    dataService.getWishList()
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})

app.delete ("/delete-wishlist/:id",(req,res)=>{
    console.log("inside delete-wishlist Function");
    dataService.deleteItemWishList(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
})


app.post('/add-to-wishlistmen',(req,res)=>{
  console.log("inside add-to-wishlistmen function");
  console.log(req.body);
  dataService.addToWishListMen(req.body.id,req.body.title,req.body.price,req.body.image,req.body.category,req.body.description)
  .then((result)=>{
    res.status(result.statusCode).json(result)
 })
})

app.get('/get-to-wishlistmen',(req,res)=>{
    console.log("inside get-to-wishlistmen function");
    dataService.getToWishListMen()
    .then((result)=>{
      res.status(result.statusCode).json(result)
   })
  })

  app.delete('/delete-item-wishlistmen/:id',(req,res)=>{
    console.log("inside delete-to-wishlistmen function");
    dataService.deleteToWishListMen(req.params.id)
    .then((result)=>{
      res.status(result.statusCode).json(result)
   })
  })

  app.post('/login', (req,res)=>{
    console.log("inside login function");
     dataService.login(req.body.uname,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
     })
  } )