const router = require('express').Router()

const {Cars} = require('../controllers/cars.controller')

router.route('/')
    .get(Cars.list)
    .post(Cars.create)
    
router.route('/:_id')
    .get(Cars.read)
//     .put(Cars.update) // put patch aynı
//     .patch(Cars.update)
//     .delete(Cars.delete)

module.exports = router