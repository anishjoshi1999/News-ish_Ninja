# News-ish Ninja project

Welcome to the **News-ish Ninja project**! This project aims to fetch the latest news using the NewsAPI, curate important news using OpenAI, and then publish these curated news articles on a Facebook page using the Facebook Graph API.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

2. Install dependencies:

3. Set up Environment Variables:

Create a `.env` file in the project root and add the following variables:

## Environment Variables

- `PORT`: The port number for the local server.
- `FACEBOOK_PAGE_ID`: The ID of your Facebook page.
- `ACCESS_TOKEN`: Your Facebook Graph API access token.
- `NEWS_API_KEY`: Your NewsAPI API key.
- `NEWS_TOPICS`: Provide a preferred news category (Only 1) for retrieval: [business, bitcoin, technology, sports]
- `MONGODB_ATLAS_USERNAME`: Your MongoDB Atlas username.
- `MONGODB_ATLAS_PASSWORD`: Your MongoDB Atlas password.
- `MONGODB_ATLAS_COLLECTION`: The name of the MongoDB Atlas collection.
- `OPENAI_API_KEY`: Your OpenAI API key.
- `QUERY`: Your query for refining news summaries.

## Usage

1. The project fetches the latest news using NewsAPI based on the specified topics.
2. It uses OpenAI to summarize and curate the most important news articles.
3. Curated news articles are then posted to your specified Facebook page using the Facebook Graph API.

## License

This project is licensed under the MIT License.
