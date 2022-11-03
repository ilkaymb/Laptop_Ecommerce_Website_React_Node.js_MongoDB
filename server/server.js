const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userRouter = require("./routes/main");
const cors = require("cors");

const url =
  "mongodb+srv://200202030:20012001abc@cluster0.dbpm2dc.mongodb.net/yazlab_project?retryWrites=true&w=majority";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRouter);

async function connect() {
  try {
    await mongoose.connect(url);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

connect();

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

module.exports = router;
