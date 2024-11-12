require("dotenv").config();
const path=require('node:path');
const express=require('express');

// const userRouter=require('./Router/userRouter');
const postRouter=require('./Router/postRouter');

const app=express();
app.use(express.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,"Views"));
app.set("view engine","ejs");
const PORT=3000;

// app.use('/user',userRouter);
app.use('/post',postRouter);
app.get('/signup',(req,res)=>res.render("signUp"));
app.get('/login',(req,res)=>res.render("sign"));

app.listen(PORT,()=>console.log(`Server started at port ${PORT}` ));