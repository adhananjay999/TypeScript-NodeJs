const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:false
    },
    create_date:{
        type: Date,
        default:Date.now
    }
});

const Posts=mongoose.model("posts",schema);
module.exports=Posts;
