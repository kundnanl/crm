import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
    useNewUrlParser: true
});

//bodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.get("/", (req, res) => 
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);