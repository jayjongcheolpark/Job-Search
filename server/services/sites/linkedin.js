const puppeteer = require('puppeteer')

const parseByLinkedIn = async (page, url) => {
  let ret = null
  console.log('parseByLinkedIn')
  await page.goto(url)
  await page.waitFor(800)
  return await page.evaluate(() => {
    let data = {}

    data.jobTitle = document.querySelector('.title').textContent
    data.company = document.querySelector('.company').textContent
    data.location = document.querySelector('.location').firstChild.firstChild.textContent
    return data
  })
}

module.exports = parseByLinkedIn