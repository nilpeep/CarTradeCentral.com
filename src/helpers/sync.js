"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    const User = require('../models/user')
    await User.create({
        "username": "admin",
        "password": "aA?123456",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": true,
        "isAdmin": true
    })
    console.log('- Admin user created.')

}