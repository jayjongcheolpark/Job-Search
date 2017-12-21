const parseUtils = require('../utils/parseURL')

module.exports = (app, page) => {
  var ret = app.post('/api/job', async (req, res, next) => {
    try {
      const jobInfo = await parseUtils.parseURL(req.body.URL, page)
      console.log(jobInfo)
      res.send({})
    } catch (err) {
      res.status(400).send('Bad Request')
    }
  })
}