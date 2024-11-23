const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title  : {
        type : String,
        required : true
    },
    description : String,
    Image : {
        type : String,
        default:"https://media.istockphoto.com/id/171259869/photo/villa-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=RrPH3h9kU-YUGMqhsGzLgJMHUOemjhVVWl1o9Qijw1U=",
        set:(v) => v === "" ? "https://media.istockphoto.com/id/171259869/photo/villa-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=RrPH3h9kU-YUGMqhsGzLgJMHUOemjhVVWl1o9Qijw1U=" : v,

    },
    price : Number,
    price1 : Number,
    price2 : Number,
    
});

const Listing = mongoose.model("Listing" , listeningSchema);
module.exports = Listing;