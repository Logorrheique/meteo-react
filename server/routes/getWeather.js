const { Router } = require("express");
const getWeather = require("../controllers/getData");
const router = Router();

router.get("/:city", getWeather);

module.exports = {
  getWeather: router,
};
