// require(`dotenv`).config({path: './env})
import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDB().then(() => {

    app.on("error", (err) => {
        console.log("ERROR :", err);
        throw err;
    })
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  }).catch((err) => {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
  });


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