const express=require('express');
const app=express();

//Default Route
app.get('/',(req,res)=>{
    res.send('CRUD APPLICATION');
});


//listen to server to port
app.listen(3000,()=>console.log(`Server is running on http://localhost:${3000}`));