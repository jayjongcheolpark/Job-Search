const puppeteer = require('puppeteer')

const parseByIndeed = async (page, url) => {
  let ret = null
  console.log('start')
  await page.goto(url)
  await page.waitFor(800)
  return await page.evaluate(() => {
    let data = {}
    data.jobTitle = document.querySelector('.jobtitle').firstElementChild.textContent
    data.company = document.querySelector('.company').textContent
    data.location = document.querySelector('.location').textContent
    return data
  })
}

module.exports = parseByIndeed