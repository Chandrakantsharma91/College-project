const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} =require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Ecommerce";
// const MONGO_URI = "mongodb://127.0.0.1:27017/SecondDB";

main().then(()=>{
    console.log("connect DB");
}).catch((err)=>{
    console.log(err);
    
})
async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended:true})); //we use this for parsing the data
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));


app.get("/" , (req , res)=>{
    res.send("i am root");
});

const validateListing = (req , res , next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw ExpressError(400 , errMsg);
    }else{
        next();
    }
}

// Index Route
app.get("/listings" ,wrapAsync(async (req , res)=>{
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing});
}));

// New Route
app.get("/listings/new" , (req , res)=>{
    res.render("listings/new.ejs" )
})

// Feedback
app.get("/listings/feedback" , (req , res)=>{
    res.render("listings/feedback.ejs");
});

// Show route
app.get("/listings/:id" , wrapAsync(async (req , res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
    
}))

// Create Route
app.post("/listings" ,
    validateListing,
   wrapAsync( async (req , res , next)=>{
// here we have done destructring in new.ejs in new way
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400 , error);   
    }
    const newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
);
// Edit Route
app.get("/listings/:id/edit" ,wrapAsync(async (req , res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing})
    
}))


// Update
app.put("/listings/:id" ,
    validateListing,
    wrapAsync(async (req , res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
    
}))

// // Delete
// app.delete("/listings/:id" ,wrapAsync(async (req , res)=>{
//     let {id} = req.params;
//     let deletedListing =  await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// })
// )


// app.get("/testListing" , async (req , res)=>{
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description : "By the beatch",
//         price : 1200,
//         location : "calangute , Goa",
//         country : "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sucessful testing ");
// })

app.all("*", (req , res , next) =>{
    next(new ExpressError(404 , "Page not Found"))
})

app.use((err , req , res , next) =>{
    let {statusCode = 500 , message = "someting went wrong"} = err;
    res.render("error.ejs")
    // res.status(statusCode ).send(message);
});

app.listen(8080 , (req , res)=>{
    console.log("port is listening at port 8080");
    
})