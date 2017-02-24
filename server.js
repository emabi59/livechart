 var express=require('express');
 var app = express();

 app.use('/',function(req,res){
   res.sendFile('index.html',{root:__dirname +'/'});
 });
  app.set('port',process.env.PORT||5000)
 app.listen(app.get('port'),function(){
   console.log('Its running at port' +app.get('port'))
 })



// get the module

// instantiate the module to get the oblect

// use the objet to send and req aand response
