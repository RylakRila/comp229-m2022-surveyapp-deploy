//import modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import surveyRoutes from './routes/surveyRoute.js';
import authRoutes from './routes/authRoutes.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import authConfig from './Config/auth.js';
import { dbSecret } from './Config/db.js';

//app
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//dotenv
dotenv.config();
const dburl = process.env.DB_URL;
//db
Connection(dburl);


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(authConfig.session({
    secret: dbSecret,
    saveUninitialized: false,
    resave: false
}));
app.use(authConfig.flash());

//initialize passport
app.use(authConfig.passport.initialize());
app.use(authConfig.passport.session());

//routes
app.use('/api', authRoutes);
app.use('/api', surveyRoutes);

//port
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

//listener
const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);