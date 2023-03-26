const express=require('express');
const app=express();
const mongoose=require('mongoose');

app.get('/user',async(req,res)=>{
   return res.status(200).send("user found"); 
})

app.get('/product',async(req,res)=>{
   return res.status(200).send("product found");
})

app.listen(3000,()=>{
   console.log("listening on port 3000");
});