import  express  from "express";
import dotenv from "dotenv";

import countryRouter from "./routers/country.route.js";
import cityRouter from "./routers/city.route.js";
import universityRouter from "./routers/university.route.js";
import collegeRouter from "./routers/college.route.js";
import majorRouter from "./routers/major.route.js";
import batchRouter from "./routers/batch.route.js";
import userRouter from "./routers/user.route.js";
import groupRouter from "./routers/group.route.js";
import groupMessageRouter from "./routers/groupMessage.route.js";
import channelRouter from "./routers/channel.route.js";
import channelMessageRouter from "./routers/channelMessage.route.js";
import formRouter from "./routers/form.route.js";
import formQuestionRouter from "./routers/formQuestion.route.js";
import { connectDB } from "./config/mongoDB.js";

const app = express();
dotenv.config()
connectDB();

const PORT = process.env.PORT || "5000";
//routes

// body
app.use(express.json())

app.use("/api/country",countryRouter)
app.use("/api/city",cityRouter)
app.use("/api/university",universityRouter)
app.use("/api/college",collegeRouter)
app.use("/api/major",majorRouter)
app.use("/api/batch",batchRouter)
app.use("/api/user",userRouter)
app.use("/api/group",groupRouter)
app.use("/api/groupMessage",groupMessageRouter)
app.use("/api/channel",channelRouter)
app.use("/api/channelMessage",channelMessageRouter)
app.use("/api/form",formRouter)
app.use("/api/formQuestion",formQuestionRouter)
app.listen( PORT,()=>{
  console.log("listening on port " + PORT)
})