"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isPublish": false
}
/* ------------------------------------------------------- */
// Car Model:

const carSchema = new mongoose.Schema({
    plateNumber:{
        type: String,
        required: true,
        trim:true,
        unique:true,
        minlength:7,

    },
    brand:{
        type: String,
        required: true,
        trim:true
    },
    model:{
        type: String,
        required: true,
        trim:true
    },
    year:{
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear() + 1

    },
    isAutomatic:{
        type: Boolean,
        default: false
    },
    pricePerDay:{
        type: Number,
        required: true
    },
    images:{
        type: Array,
        default: []
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    createdId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    updatedId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
})

module.exports = mongoose.model('Car', carSchema)