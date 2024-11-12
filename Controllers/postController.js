const db=require('../db/queries');

async function getAllPosts(req,res){
    const posts={ps:"jdjd"};
    res.render('index',{posts:posts});
}
async function getSinglePost(req,res){
    res.send("all post");
}
async function addPost(req,res){

}
async function updatePost(req,res){

}
async function deletePost(req,res){

}
module.exports={getAllPosts,getSinglePost,addPost,updatePost,deletePost};