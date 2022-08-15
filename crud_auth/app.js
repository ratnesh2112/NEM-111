
const express = require('express');
const { connection } = require('./config');
const { userModel } = require('./Model/usermodel');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.post("/signup",async(req,res) =>{
   const {email , password , phone} = req.body;

   const newUser = new userModel({email,password,phone});

   newUser.save();

   res.send("SignUp sucessfull")
})

app.post("/login" ,async (req,res) =>{

    const {email , password} = req.body;

    const user = await userModel.find({email , password})
    const token = jwt.sign({ email : user.email , phone : user.phone }, 'masai');
    //const token = 1234
    //console.log(user);
    if(user.length === 0)
    {
        return res.send("Invalid Credentials")
    }
    return res.send({message :"Login Successfull" , token : token})
})
app.get("/" ,(req,res) =>{
    res.send("Welcome to Home page")
})
app.get("/product/:id" ,async (req,res) =>{

    const id = req.params.id;

    const user_token = req.headers.authorization.split(" ")[1]

    jwt.verify(user_token, 'masai', function(err, decoded) {
        if(err)
        {
            res.send("Please login again!")
        }
    });
    const user = await userModel.find({_id:id},{_id:0,__v  : 0});
    //console.log(user)
    return res.send(user)
})
app.get("/cart/:id", async (req,res) =>{
    const id = req.params.id;

    const user_token = req.headers.authorization.split(" ")[1]

    jwt.verify(user_token, 'masai', function(err, decoded) {
        if(err)
        {
            res.send("Please login again!")
        }
    });
    const user = await userModel.find({_id : id});
    return res.send({email : user[0].email , phone : user[0].phone})
})
app.listen(8050 , async () =>{
    try{
        await connection
    }
    catch{
        console.log("Error in connecting to DB")
    }
    //console.log("Connecting To DB Success");
    console.log("server started on port 8050");
})



//7d5e8dd135090af2a8bf => github client ID for Oauth

// token code = c60edef5836dbaed0693

// app.get("/dashboard",(req,res)=>{
//     console.log(req.query.code)
//     return res.send("Dashboard acess after login")
// })

// app.get("/" ,(req,res) =>{
//     res.send(`<a href="https://github.com/login/oauth/authorize?client_id=7d5e8dd135090af2a8bf"><button>Login via github</button></a>`)
// })