const parseByGlassdoor = async (page, url) => {
  let ret = null
  console.log('parseByGlassdoor')
  await page.goto(url)
  await page.waitFor(800)
  return await page.evaluate(() => {
    let data = {}
    let empHeader = document.querySelector('.empHeader').children
    data.jobTitle = empHeader[0].textContent
    data.company = empHeader[2].textContent
    data.location = empHeader[3].textContent.replace(/^\s–\s/g,"");
    return data
  })
}

module.exports = parseByGlassdoor