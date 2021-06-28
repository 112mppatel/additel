const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fashion', {useNewUrlParser: true, useUnifiedTopology: true });

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;


const Schema=mongoose.Schema
const itemSchema = new mongoose.Schema({
  name: {type:String, require:true},
  fabric: {type:String, require:true},
  color: {type:String, require:true},
  price: {type:Number, require:true}
})
const Item = mongoose.model('Item', itemSchema)

router.get('/',function(req,res){

  Item.find().then(function(fashion){
    console.log(fashions)
    return res.render({fashion:fashion})
  })
  res.sendFile(path.join(__dirname+'/view/home.html'));
});

router.get('/cart',function(req,res){
  res.sendFile(path.join(__dirname+'/view/cart.html'));
});

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 3001);

console.log('Running at Port 3001');