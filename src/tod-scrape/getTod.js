const { scrapeTOD } = require('./scraper');

const tod = async (type, category) => {
  if (typeof type !== 'string') {
    throw new TypeError(`Invalid Type ${typeof type}`);
  }
  if (typeof category !== 'string') {
    throw new TypeError(`Invalid Type ${typeof type}`);
  }
  return await scrapeTOD({ type, category });
};

module.exports = { tod };
