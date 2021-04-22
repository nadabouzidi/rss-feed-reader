const readline = require("readline");
const FeedReader = require("./rss-feed-reader");

const lineReader = readline.createInterface(process.stdin, process.stdout);
const prompter = "Insert a RSS feed URL:   ";

const RSSReader = new FeedReader();

console.log(prompter);

let parseLine = async (line) => {
  const RSSFeed = await RSSReader.getFeed(line);
  console.log(RSSFeed);
  console.log(prompter);
};

lineReader.on("line", parseLine);

lineReader.on("close", () => {
  console.log("Thank you for using rss-feed-reader");
});
