process.stdout.write("\033c");

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

mongoose
  .connect(
    "mongodb+srv://Adarsh:$123Adarsh@cluster0-mribm.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {
      dbName: "animes",
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((_) => console.log("Connection to MongoDB eshtablished!"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(logger("dev"));

app.use("/search", require("./routes/search"));

app.use((err, req, res, next) => console.log(err) || res.send({ err }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => console.log(err ? err : `Running on ${PORT}...`));
