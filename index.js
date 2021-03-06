const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
//const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://krosales23:karen@cluster0.8vhfy.mongodb.net/test")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(process.env.PORT || PORT, () => {
    console.log("The server is listening on port " + PORT);
});