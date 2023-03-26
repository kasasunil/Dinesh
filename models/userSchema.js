const mongoose=require('mongoose');
const Product = require('./productSchema');

const schema=new mongoose.Schema({
    name:{
        type:String
    },
    place:{
        type:String
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
});
const User=mongoose.model('User',schema);


module.exports=User;