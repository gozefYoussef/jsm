import express from 'express';
import * as dotnev from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotnev.config();
const app = express();

app.use(cors());
app.use(express.json({limig: "50mb"}))

app.use("/api/v1/dalle", dalleRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message: "Hello World"})
})

app.listen(3000, ()=>{console.log("app listenning on port 3000")});
