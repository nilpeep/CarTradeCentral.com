const { Car } = require("../models/cars.model") 

module.exports.Cars = {
    list: async (req, res) => {
        const data = await Car.find()
        res.status(200).send({
            error: false,
            data: data
        })
    },
    create: async (req, res) => {
        const data = await Car.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read: async (req, res) => {
        const data = await Car.findById(req.params._id)
        res.status(202).send({
            error: false,
            data: data
        })
    },
    readByModel: async (req, res) => {
        const cars = await Car.find({car_model: req.params.model})
        if (cars.length > 0) {
            res.json(cars);
          } else {
            res.status(404).json({ message: "No cars found with that model." });
          }
    }
    // read: async (req, res) => {
    //     const data = await Car.find({ _id: req.params.categoryId })
    //     res.status(202).send({
    //         error: false,
    //         data: data
    //     })
    // },
    // update: async (req, res) => {
    //     const data = await Car.updateOne({ _id: req.params.categoryId }, req.body)
    //     const newdata = await BlogCategory.find({ _id: req.params.categoryId })
    //     res.status(202).send({
    //         error: false,
    //         body: req.body,
    //         data: data, // info about update
    //         // güncel veriyi istiyorsan tekrar çağır
    //         newdata: newdata
    //     })
    // },
    // delete: async (req, res) => {
    //     const data = await Car.deleteOne({ _id: req.params.categoryId })
    //     // console.log(data);
    //     res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    // }
}