import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));//limit dla przyszlego przesylania zdjec 
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://bulbulator:bulbulator123@cluster0.j8lsh7b.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


// https://www.mongodb.com/cloud/atlas

