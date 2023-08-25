const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/news", async (req, res) => {
  try {
    // Define the URL for the News API
    const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`;

    // Make a GET request to the News API
    const response = await axios.get(apiUrl);
    const newsData = [];
    // Send the news data as a JSON response
    res.json(response.data);
    response.data.articles.forEach((element) => {
      newsData.push({
        title: element.title,
        description: element.description,
        url: element.url,
        publishedAt: element.publishedAt,
      });
    });
    //read 10 news
    const news = newsData.slice(0, 10);
    let newsList = "";
    for (let i = 0; i < news.length; i++) {
      newsList = newsList + "\n\n" + (i + 1) + ": " + news[i].description;
    }
    console.log(newsList);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching news." });
  }
});
module.exports = router;
