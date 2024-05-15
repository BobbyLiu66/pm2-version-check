
const https = require('https');
const debug = require('debug')('pm2:version-check')
const qs    = require('querystring')

var VersionCheck = {}

VersionCheck.runCheck = function(params, cb) {
}

module.exports = VersionCheck

if (require.main === module) {
  VersionCheck.runCheck((err, dt) => {
    console.log(err, dt)
  })
}
