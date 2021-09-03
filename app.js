var express=require("express");
var router=express();
var sturoutes=require("./sturegjs")
var emproutes=require("./empregjs")

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.set('view engine','pug');
router.set('views','./views');

router.get("/",function(req,res){
    res.sendFile(__dirname+"/homepage.html")
})
router.use("/student",sturoutes)
router.use("/employee",emproutes)

router.listen(8090,function(){
    console.log("Listening on 8090")
})

