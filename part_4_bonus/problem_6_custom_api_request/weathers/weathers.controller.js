const fetchWeathers = require("./weathers.service");

async function getWeathers(req, res) {
  try {
    const city = req.query.city;
    if (!city) {
      throw new Error("City is required");
    }
    const weathers = await fetchWeathers(city);
    res.send(weathers);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getWeathers,
};
