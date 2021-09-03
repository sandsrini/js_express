var expimp=require("express")
var router=expimp.Router()
var stuarr=[]

router.post("/sturegbtn1",function(req,res){
    console.log("Request data params::",req.body)
    stuarr.push(req.body);
    res.send("Registration successfull")
})

router.get("/stureg",function(req,res)
{res.sendFile(__dirname+"/stureg.html");
})

router.get("/stulist",function(req,res)
{
    res.render("sturegpug",{allstudents:stuarr})
})

module.exports=router;