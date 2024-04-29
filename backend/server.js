const express = require("express");
const app = express();
const port = 3001; // Choose a port different from your React app
const routes = require("./routes");
const cors = require("cors");

app.use(cors());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
