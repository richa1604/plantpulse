const express =require('express')
const router =express.Router()
const Employeecontoller = require('../contollers/Employeecontoller')
router.get('/',Employeecontoller.index)
router.post('/show',Employeecontoller.show)
router.post('/store',Employeecontoller.store)
router.post('/update',Employeecontoller.update)
router.post('/destroy',Employeecontoller.destroy)
module.exports=router