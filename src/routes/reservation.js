"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservation:

const reservation = require('../controllers/reservation')

const {isAdmin,isLogin,isStaff} = require('../middlewares/permissions')

// URL: /reservations


router.route('/')
    .get(isLogin, reservation.list)
    .post(isLogin,reservation.create)

router.route('/:id')
    .get(isLogin,reservation.read)
    .put(isStaff,reservation.update)
    .patch(isStaff,reservation.update)
    .delete(isAdmin,reservation.delete)

/* ------------------------------------------------------- */
module.exports = router