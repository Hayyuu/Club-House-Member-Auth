const pool = require("./pool");
const bcrypt=require('bcryptjs');
async function getAllPosts() {
  const { rows } = await pool.query("SELECT * FROM post");
  console.log(rows);
  return rows;
}

async function addPost(req){
  const user_id=req.params.userID;
  const res=await pool.query('Insert into post (content,user_id,date_added,last_updated) values($1,$2,$3,$4)',[req.body.content,user_id,new Date(),new Date()]);
  console.log("Post added Succesfully")
}
async function getSinglePost(id) {
  const { rows } = await pool.query(`SELECT * FROM post where id=$1`,[id]);
  return rows[0];
}
async function updatePost(id){
    const {rows}=await pool.query("update post set content=($1),last_updated=($2), where id=($3)",[req.body.content,req.params.userID,id]);
    return rows;
}
async function deletePost(id){
    const is_admin=await pool.query("select is_admin from user where id=($1)",[req.params.userID]);
    const user_id=await pool.query("select user_id from post where id=($1)",[id]);
    if(is_admin!=="admin" || user_id!==req.params.userID){
      return "Not Privilaged";
    }
    const {rows}=await pool.query("delete from post where id=($1)",[id]);
    return rows;
}

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
  }
  
  async function addUser(req){
    bcrypt.hash(re.body.password,10,async(err,hashedPassword)=>{
        if(err){
            console.log("Can not hash the password");
            return err;
        }
        const res=await pool.query('Insert into users (first_name,first_name,email,password,member_status,is_admin) values($1,$2,$3,$4,$5,$6)',[req.body.first_name,req.body.last_name,req.body.email,hashedPassword,"not member","not Admin"]);
        console.log("User added Succesfully")
    });
   
  }
  async function getSingleUser(id) {
    const { rows } = await pool.query(`SELECT * FROM users where id=$1`,[id]);
    return rows[0];
  }
  async function updateUser(id){
      const {rows}=await pool.query("update users set first_name=($1),first_name=($2), member_status=($3) where id=($4)",[req.body.first_name,req.params.last_name,req.body.member_status,id]);
      return rows;
  }
  async function deleteUser(id){
      const {rows}=await pool.query("delete from users where id=($1)",[id]);
      return rows;
  }
module.exports={getAllPosts,getSinglePost,addPost,deletePost,updatePost,getAllUsers,getSingleUser,addUser,updateUser,deleteUser};
