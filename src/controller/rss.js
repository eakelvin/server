const Parser = require("rss-parser");
const parser = new Parser();

const feedUrl = "";
const articleUrl = [
  "https://news.yahoo.com/rss",
  "https://news.google.com/rss",
  "https://netflixtechblog.com/feed",
  "https://rooseveltislander.com/feed/",
];

const getRssFeed = async (req, res) => {
  try {
    // SINGLE FEED
    // const feed = await parser.parseURL(feedUrl);
    // console.log("RSS Feed fetched successfully", feed.title);
    // res.status(200).json(feed);

    // ARRAY OF FEEDS
    const feedPromises = articleUrl.map(async (url) => {
      const feed = await parser.parseURL(url);
      return {
        source: url,
        title: feed.title,
        items: feed.items,
      };
    });

    const allFeeds = await Promise.all(feedPromises);
    res.status(200).json(allFeeds);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

module.exports = { getRssFeed };
