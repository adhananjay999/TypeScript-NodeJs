const mongoose=require('mongoose');

const Mongo_URI=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fhchv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectDB=async ()=>{
    try {
        //mongodb connection string
        const conn=await mongoose.connect(Mongo_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);process.exit(1);
    }
};

module.exports=connectDB