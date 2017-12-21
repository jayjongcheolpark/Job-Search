const utils = require('../utils/parseURL')

module.exports = (app, page) => {
  var ret = app.post('/api/job', async (req, res, next) => {
    try {
      await utils.parseURL(req.body.URL, page)
      res.send({})
    } catch (err) {
      res.status(400).send('Bad Request')
    }
  })
}