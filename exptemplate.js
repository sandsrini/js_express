var express=require('express')
var expcall=express()
var arr=[]
expcall.use(express.urlencoded({extended:true}));
expcall.use(express.json());

expcall.set('view engine','pug');
expcall.set('views','./views');

// expcall.get("/",function(req,res){
//     res.render("arr",{
//         allsudents:arr
//     })
// })

expcall.get("/",function(req,res){
res.sendFile(__dirname+"/regday2.html");
})

expcall.post("/regbutton1",function(req,res){
    console.log("Request Query Params::",req.body)
    arr.push(req.body);
    // res.send(JSON.stringify(arr));
    res.render("htmlpug",{
        allstudents:arr
    })
res.send("OK");
})
expcall.listen(8090,function(){
    console.log("Listening on 8080")
})

// expcall.get("/htmlpug",function(req,res){
// res.render('htmlpug');
// });