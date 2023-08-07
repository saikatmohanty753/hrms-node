import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {getuser} from './database.js';
dotenv.config();
const app = express()

app.use(cors({origin:""}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8080,function(req,res,next){console.log("listening on",8080)});

app.get('/total', function(req, res){
    if(getuser)
    {
        return res.json({"query":getuser[0]});
    }
    return res.json({"query":getuser});
});