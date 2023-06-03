const path =require('path')
const multer=require('multer')
var storate = multer.diskstorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext = ptah.extname(file.originalname)
        cb(null,Date.now()+ext)

    }
})
var upload = multer({})