const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8081;
const app = express();
var corOptions = {
  origin: "http://localhost:8081",
};

/// middle ware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// routes

const router = require("./routes/productRouter.js");
app.use("/api/product", router);

// server
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
