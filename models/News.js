const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});

const newsSchema = new Schema({
  news: [newsItemSchema],
  date: {
    type: Date,
    default: () => new Date().setHours(0, 0, 0, 0),
  },
});

module.exports = mongoose.model("News", newsSchema);
