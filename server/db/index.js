const mongoose = require('mongoose')

const { MONGO_URI } = process.env

module.exports = (function () {
  mongoose.Promise = global.Promise;
  return {
    connect () {
      return mongoose.connect(MONGO_URI, {
        useMongoClient: true
      })
        .then(() => {
          console.info('Successfully connected to mongodb');
        })
        .catch(e => {
          console.error(e);
        })
    },
    disconnect () {
      return mongoose.disconnect();
    }
  }
})();