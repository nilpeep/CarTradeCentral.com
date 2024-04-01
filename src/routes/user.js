"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/user')

// URL: /users

router.route('/')
    .get(permissions.isAdmin, user.list)
    .post(permissions.isStaffOrisAdmin, user.create)

router.route('/:id')
    .get(permissions.isLogin, user.read)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin,user.update)
    .delete(permissions.isStaffOrisAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router