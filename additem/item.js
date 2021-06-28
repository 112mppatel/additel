const mongoose=require('mongoose')
const Schema=mongoose.Schema

const itemSchema= new Schema({
    name: {type:String, require:true}
    fabric: {type:String, require:true}
    color: {type:String, require:true}
    price: {type:Number, require:true}
})

const Item = mongoose.model('Item', itemSchema)