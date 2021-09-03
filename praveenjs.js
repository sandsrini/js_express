var express=require("express")
var router=express.Router()

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.set('view engine','pug')
router.set('views','./views')

router.get("/",funtion(req,res){
res.sendFile(__dirname+"/homepage1.html")
})