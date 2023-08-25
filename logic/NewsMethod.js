const axios = require("axios");
require("dotenv").config();
const News = require("../models/News");
const InvokeNews = async () => {
  try {
    // Define the URL for the News API

    const apiUrl = `https://newsapi.org/v2/everything?q=${process.env.NEWS_TOPICS}&apiKey=${process.env.NEWS_API_KEY}`;

    // Make a GET request to the News API
    const response = await axios.get(apiUrl);
    const newsData = [];
    response.data.articles.forEach((element) => {
      if (element.description != null) {
        newsData.push({
          title: element.title,
          description: element.description,
          url: element.url,
          publishedAt: element.publishedAt,
        });
      }
    });
    try {
      const data = new News({
        news: newsData,
      });
      await data.save();
      console.log("News Data Added Successfully!");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
};

module.exports = InvokeNews;
