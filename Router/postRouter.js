const {Router}=require('express');
const postRouter=Router();
const postController=require('../Controllers/postController');
postRouter.get('/',(req,res)=>postController.getAllPosts(req,res));
postRouter.get('/new',(req,res)=>res.render('post/addPost'));
postRouter.post('/new',(req,res)=>postController.addPost(req,res));
postRouter.get('/update/:postId',(req,res)=>res.render('post/updatePost'));
postRouter.post('/update/:postId',(req,res)=>postController.getSinglePost(req,res));
postRouter.get('/:postID',(req,res)=>postController.getSinglePost(req,res));
postRouter.delete('/:postID',(req,res)=>postController.deletePost(req,res));


module.exports=postRouter;