const axios = require("axios");
require("dotenv").config();
const InvokeFacebook = async (content) => {
  // Function to trigger the POST request
  try {
    const response = await axios.post(
      `https://graph.facebook.com/${process.env.FACEBOOK_PAGE_ID}/feed?message=${content}&access_token=${process.env.ACCESS_TOKEN}`
    );
    console.log("Automatic POST request triggered:", response.data);
  } catch (error) {
    console.error("An error occurred during automatic POST request:", error);
  }
};

module.exports = InvokeFacebook;
