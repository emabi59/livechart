 var express=require('express');
 var app = express();

 app.use('/',function(req,res){
   res.sendFile('index.html',{root:__dirname +'/'});
 });

 app.listen(5000,function(){
   console.log('Its running at port 4000')
 })



// get the module

// instantiate the module to get the oblect

// use the objet to send and req aand response
