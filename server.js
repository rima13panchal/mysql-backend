const express = require("express");
const cors = require("cors");
const routePerson = require("./routes/person");

const app = express();
app.use(cors("*"));
app.use(express.json());

app.use("/person", routePerson);
app.get("/test", (req, res) => {
  res.send("test");
});
app.listen(4000, "0.0.0.0", () => {
  console.log("server started to run on port 4000");
});
