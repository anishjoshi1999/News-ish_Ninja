const express = require("express");
const router = express.Router();
const InvokeNews = require("../logic/NewsMethod");
const InvokeOpenAI = require("../logic/OpenAIMethod");
const InvokeFacebook = require("../logic/FacebookMethod");
require("dotenv").config();

router.post("/execute", async (req, res) => {
  //Invoke News Method
  await InvokeNews();
  //Invoke OpenAI Method
  let result = await InvokeOpenAI();
  //Invoke Facebook Method
  await InvokeFacebook(result.content);
});
module.exports = router;
