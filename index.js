var VersionCheck = {}

VersionCheck.runCheck = function(params, cb) {
}

module.exports = VersionCheck

if (require.main === module) {
  VersionCheck.runCheck((err, dt) => {
    console.log(err, dt)
  })
}
