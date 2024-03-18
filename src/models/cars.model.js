const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    car_make: String,
    car_model: String,
    car_year: Number,
    car_vin: String,
    purchase_price: Number,
    sale_price: Number,
    stock_quantity: Number,
    location: String,
    last_updated: Date
  });

module.exports ={
   Car: mongoose.model('cars', carSchema)
    
} 