"use strict";
const express = require('express')
const app = express()

/* DB connection  */

const mongoose = require('mongoose')

const MONGODB = process.env.MONGO

mongoose.connect('mongodb://localhost:27017/sahibinden')
.then(()=> console.log('mongoDB connected'))
.catch((err)=> console.log(err))


const PORT=8000
const HOST="localhost"

app.all('/',(req,res)=>{
    res.send('welcome')
})



app.get('/cars', async (req, res) => {
    try {
      const cars = await Car.find(); // Tüm arabaları çek
      res.json(cars); // Araba listesini JSON formatında döndür
    } catch (err) {
      res.status(500).send({ message: err.message }); // Hata durumunda 500 durum kodu ile hata mesajını döndür
    }
  });

app.listen(PORT,()=> console.log(` Server Running on http://${HOST}:${PORT}`))