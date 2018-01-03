const URL = require('url-parse')
const puppeteer = require('puppeteer')

const parseByIndeed = require('./sites/indeed')

let page = null

const openBrowser = async (browser) => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
}

const closeBrowser = browser => {
  browser.close()
}

const parseJobLink = async url => {
  const parsedUrl = new URL(url)
  let parsedData = null
    switch (parsedUrl.hostname) {
      case 'ca.indeed.com':
        parsedData = await parseByIndeed(page, parsedUrl.href)
        console.log(parsedData)
        break
      default:
    }

  return parsedData
}

module.exports = {
  openBrowser,
  closeBrowser,
  parseJobLink
}
