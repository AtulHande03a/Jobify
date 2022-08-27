import express from "express";
import connectDB from "./db/connect.js";
const app = express();

import dotenv from "dotenv";
dotenv.config();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log(`server listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
