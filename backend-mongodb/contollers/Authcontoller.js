const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register =  (req, res, next) => {
    console.log("heyy it works")
    bcrypt.hash(password, 10, function async(err, hashedPass) {
        if (err) {
            console.log("1");
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
         user.save().then(user => {
                console.log("successsss")
                res.send("successsss");
            }).catch(error => {
                console.log("fail");
                res.json({
                    message: 'an error occured'
                })
            })
    })

}
const login=(req,res,next) =>{
    var username=req.body.username
    var password=req.body.password
    User.findOne({email:username})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({name:user.name},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                        message:'login succesful',
                        token
                    })
                }else{
                    res.json({
                        message:"password does not match"
                    })
                }
            })
        }else{
            res.json({
                message:'no user found'
            })
        }
    })
}
module.exports = {
    register,login
}