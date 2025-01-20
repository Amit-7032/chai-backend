import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

const PORT = 8000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT || PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!", err);
  });

/*
Immediately Invoked Function Expressions (IIFE)
;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${p rocess,env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
*/
