import express from 'express';
import cors from 'cors';
import cookieparser from "cookie-parser"

const app = express();

// use cors after intialized express app 
// Use the CORS middleware
// CORS used for deciding which server or domain or client are used 
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true     
    
}));

app.use(express.json({
    limit: "20kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}));

app.use(express.static("public"));

app.use(cookieparser());

export {app}


