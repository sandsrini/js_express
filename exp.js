var exp=require('express')
var express=exp()
var students
var arr=[]

express.use(exp.urlencoded({extended:true}));
express.use(exp.json());

express.get("/",function(req,res){
res.sendFile(__dirname+"/regday2.html");
})

express.post("/regbutton1",function(req,res){
    console.log("Request Params Data::",req.body);
    arr.push(req.body);
    res.send(JSON.stringify(arr));
}).listen(8080,function(){
    console.log("Listening on 8080")
})




// express.get("/regbutton1",function(req,res){
//     console.log("Request Params Data::",req.query);
//     arr.push(req.body);
//     res.send(JSON.stringify(arr));
// }).listen(8080,function(){
//     console.log("Listening on 8080")
// })