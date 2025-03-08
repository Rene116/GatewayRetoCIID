const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const req = require("./src/req.js");
const req2 = require("./src/req2.js");

const app = express();
const port = 3002;

app.use(cors());

app.use(express.json());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(req);
app.use(req2);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
