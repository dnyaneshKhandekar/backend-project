// require(`dotenv`).config({path: './env})
import dotenv from "dotenv"

// import mongoose, { Connection } from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: "./env"
})


// // Database Connection method 
// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)
//         app.on ('error', (err) => {
//             console.log ("ERROR :", err);
//             throw err;
//         })

//         // Start the server
//         const PORT = process.env.PORT || 3000;
//         app.listen(PORT, () => {
//             console.log(`App listening on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error(`Error connecting to the database: ${err.message}`);
//         throw err;
//         // process.exit(1);
//     }
// })()

connectDB()

