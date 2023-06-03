const express = require('express')
const router=express.Router()
const AuthContoller=require('../contollers/Authcontoller')
router.post('/register2', AuthContoller.register)
router.post('/login', AuthContoller.login)
module.exports=router