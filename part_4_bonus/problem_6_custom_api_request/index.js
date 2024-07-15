const express = require("express");
const app = express();
const weatherRoutes = require("./routes/weather-routes");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/api/weathers", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
