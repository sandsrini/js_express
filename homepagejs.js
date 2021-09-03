var expimp=require("express");
var router=expimp.Router();
var sturoutes=require("./sturegjs")
var emproutes=require("./empregjs")

router.use(expimp.urlencoded({extended:true}));
router.use(expimp.json());

router.set('view engine','pug')
router.set('views','./views')

router.get("/",function(req,res){
    res.sendFile(__dirname+"/homepage.html")
})
router.listen(8090,function(){
    console.log("Listening on 8090")
})


router.use("/student",sturoutes)

router.use("/employee",emproutes)