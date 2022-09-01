import express from "express";
import "express-async-errors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

//db and authenticator
import connectDB from "./db/connect.js";

const port = process.env.PORT || 5000;

//router import
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import autheticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", autheticateUser, jobsRouter);

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
