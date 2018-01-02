const puppeteer = require('puppeteer')

const parseByIndeed = async (page, url) => {
  let ret = null
  await page.goto(url)
  ret = await page.evaluate(() => {
    console.log('start')
    let data = {}
    return data
  })
  return ret
}

module.exports = parseByIndeed