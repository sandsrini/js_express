var express=require("express")
var router=express.Router()
var emparr=[]

router.post("/empregbtn",function(req,res){
    console.log("Request data params::",req.body)
    emparr.push(req.body)
// console.log(JSON.stringify(emparr))
    res.send("Registration successfully completed")
})

router.get("/emplist",function(req,res)
{
res.render("empregpug",{allemployees:emparr})
})

router.get("/empreg",function(req,res){
    res.sendFile(__dirname+"/empreg.html")
    })

module.exports=router


