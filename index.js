const { tod } = require('./src/tod-scrape');

const DiscordContent = {
  truthOrDare: async (type, category) => await tod(type, category),
};

module.exports = DiscordContent;
