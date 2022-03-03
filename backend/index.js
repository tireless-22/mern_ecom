console.log("helo")
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();


const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");


mongoose.connect(
  process.env.MONGO_URL
).then(() => {
	console.log("suceesfully connected the db");
})
	.catch(e=>{
		console.log(e);
	});


app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
	console.log("listening to port 3001");
})











