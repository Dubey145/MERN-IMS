import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import inventoryRoutes from './routes/inventory.js';

const app = express();

app.use('/inventory', inventoryRoutes); 
app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use(cors());

const connection_url = 'mongodb+srv://dubey:dubey145@cluster0.ukhiwdn.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

mongoose.connect(connection_url, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log('connection established at',PORT)
)).catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify',false);

