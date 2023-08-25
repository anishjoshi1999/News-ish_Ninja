const OpenAI = require("openai");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/openai", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
    temperature: 0,
    max_tokens: 256,
  });
  console.log(response.choices[0].message.content);
});
module.exports = router;
