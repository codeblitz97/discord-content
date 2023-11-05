const puppeteer = require('puppeteer');
const { TOD_URL } = require('./config');

const scrapeTOD = async (options) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto(TOD_URL);

  let divNth;
  let tod;
  let category = options.category.toLowerCase();
  let type = options.type.toLowerCase();

  if (category === 'classic') {
    divNth = 1;
  } else if (category === 'teens') {
    divNth = 2;
  } else if (category === 'party') {
    divNth = 3;
  } else if (category === 'nsfw') {
    divNth = 4;
  } else if (category === 'mixed') {
    divNth = 5;
  } else {
    throw new TypeError(`Invalid category ${category}`);
  }

  if (type === 'truth') {
    tod = 'truth';
  } else if (type === 'dare') {
    tod = 'dare';
  } else {
    throw new TypeError(`Invalid Type ${type}`);
  }

  await page.click(
    `body > div.app > div.game > div.categories > div:nth-child(${divNth})`
  );

  await page.waitForTimeout(1000);

  await page.click(`body > div.game-ui > div.btn-wrap > div.${[tod]}`);
  await page.waitForTimeout(1000);

  const text = await page.evaluate(() => {
    const div = document.querySelector(
      'body > div.game-ui > div.text-wrap > div.text'
    );
    return div.innerText;
  });

  await browser.close();

  return { [tod]: text };
};

module.exports = { scrapeTOD };
