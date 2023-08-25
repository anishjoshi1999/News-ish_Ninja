const express = require("express");
const router = express.Router();
const axios = require("axios");
// Initialize the count
let messageCount = 0;
// Facebook Routes
router.post("/facebook", async (req, res) => {
  // Function to trigger the POST request
  try {
    messageCount++; // Increment the count
    let message = `Hello From seperate route file`;
    const response = await axios.post(
      `https://graph.facebook.com/${process.env.FACEBOOK_PAGE_ID}/feed?message=${message}&access_token=${process.env.ACCESS_TOKEN}`
    );
    console.log("Automatic POST request triggered:", response.data);
  } catch (error) {
    console.error("An error occurred during automatic POST request:", error);
  }
});

module.exports = router;
