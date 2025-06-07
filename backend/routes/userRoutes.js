//all routes releated to user
const express = require('express')

const router = express.Router() 

router.route('/').post(registerUser)
router.post('/login',authUser)

module.exports = router