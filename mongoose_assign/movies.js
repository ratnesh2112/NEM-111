const express = require('express');
const { connection } = require('./config');
const { moviesModel }  = require('./Model/movies_model')

const app = express();

app.use(express.json());

app.post("/movies/post" , async (req,res) =>{

    const {title,year,rating} = req.body;

    const newmovie = new moviesModel({title,year,rating});

    newmovie.save();
    //console.log(newmovie);

    res.send("Movie Added Successfully")
})
//getting all movies on home Page

app.get("/",async (req,res) =>{
    //res.send("Home Page")

    const data= await moviesModel.find({},{_id:0 , __v:0 })

    res.send(data)

})

//filter by title

app.get("/movies/title" ,async (req,res) =>{

    const {t} = req.query;

    const data_title = await moviesModel.find({title:t},{_id:0,__v:0})

    res.send(data_title)
})

//filter by rating

app.get("/movies/rating" ,async (req,res) =>{

    const {r} = req.query;

    //console.log(typeof(rating));

    const datarating = await moviesModel.find({rating: Number(r)},{_id:0,__v:0})

    res.send(datarating)
})

//search by Name

app.get("/movies/search" ,async (req,res) =>{

    const {name} = req.query;

    //console.log(typeof(name));

    const data = await moviesModel.find({title:{$regex : name}},{_id:0,__v:0})

    res.send(data)
})

//sort by function




//pagination









app.listen(5000 , async () =>{
 try{
    await connection;
 }
 catch{
    console.log("error in connection");
 }
    
    console.log("db connected");
    console.log("started on port 5000")
})