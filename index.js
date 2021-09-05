import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js';
import cors from 'cors'
import router from './routes/routes.js';


dotenv.config()


const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);



const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);




app.listen(PORT, () => console.log(`Server is successfully running on PORT ${PORT}`));
DefaultData();