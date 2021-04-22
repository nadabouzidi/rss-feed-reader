const Parser = require("rss-parser");
class RSSFeedReader {
  constructor() {
    this.parser = new Parser();
  }

  async readFeed(feedURL) {
    if (!this.isValidUrl(feedURL)) throw new Error("Invalid feed URL");
    return await this.parser.parseURL(feedURL);
  }

  isValidUrl(feedURL) {
    const matches = feedURL.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return matches && matches.length > 0;
  }

  async getFeed(feedUrl) {
    const parsedFeed = await this.readFeed(feedUrl);
    let RSSFeed = "Title:    " + (parsedFeed.title ? parsedFeed.title : "N/A");
    RSSFeed += "\n";
    RSSFeed +
      "Description:     " +
      (parsedFeed.description ? parsedFeed.description : "N/A");
    RSSFeed += "\n";
    RSSFeed += "Link:     " + (parsedFeed.link ? parsedFeed.link : "N/A");
    RSSFeed += "\n";
    console.log("HIII", RSSFeed);
    return RSSFeed;
  }
}
module.exports = RSSFeedReader;
