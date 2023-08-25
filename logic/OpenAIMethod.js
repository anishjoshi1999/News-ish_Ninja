const OpenAI = require("openai");
const News = require("../models/News");
require("dotenv").config();
const InvokeOpenAI = async () => {
  const data = await News.find({});
  console.log(data);
  let refinedData = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].news.length; j++) {
      if (j < 10) {
        refinedData += `\n ${j + 1}: ${data[i].news[j].description}\n`;
        continue;
      }
      break;
    }
  }
  console.log("############");
  console.log(refinedData);
  console.log("############");
  let query = `${process.env.QUERY}:\n ${refinedData}`;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: query,
      },
    ],
    temperature: 0,
    max_tokens: 256,
  });
  let value = response.choices[0].message;
  return value;
};

module.exports = InvokeOpenAI;
