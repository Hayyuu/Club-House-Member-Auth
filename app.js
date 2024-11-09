require("dotenv").config();
const path=require('node:path');
const express=require('express');
app.set('views',path.join(__dirname,"Views"));
app.set("view engine","ejs");
const userRouter=require('./Router/userRouter');
const postRouter=require('./Routes/postRouter');

const app=express();
app.use(express.urlencoded({ extended: true }));

const PORT=3000;

app.use('/user',userRouter);
app.use('/post',postRouter);

app.listen(PORT,()=>console.log(`Server started at port ${PORT}` ));