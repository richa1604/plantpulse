const Employee=require('../models/Employee')
const index=(req,res,next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured'
        })
    })
}
const show=(req,res,next) =>{
    let employeeID=req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured'
        })
    })
}
const store=(req,res,next) =>{
    let employee = new Employee({
    name:req.body.name,
    email:req.body.email,
    })
    employee.save()
    .then(response =>{
        res.json({
            message:'Employee added succesfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured'
        })
    })
}

const update=(req,res,next) =>{
    let employeeID=req.body.employeeID
    let updateddata={
        name:req.body.name,
        email:req.body.email,
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updateddata})
    .then(response =>{
        res.json({
            message:'Employee updates succesfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured'
        })
    })
}
const destroy=(req,res,next) =>{
    let employeeID=req.body.nameEmployee.findOneandRemove(employeeID)
    Employee.findByIdAndRemove(employeeID)
    .then(response =>{
        res.json({
            message:'Employee deleted'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured'
        })
    })
}
module.exports={
    index,show,store,update,destroy
}