const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");


const app = express();
app.use(compression());
app.use(helmet());
app.use(cors());


// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})