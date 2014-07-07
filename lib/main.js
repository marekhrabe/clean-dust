var deleteCache = function (package) {
  for (path in require.cache) {
    if (path.indexOf(package) > -1) {
      console.log('deleting ', path)
      delete require.cache[path]
    }
  }
}

module.exports = function () {
  deleteCache('dustjs-linkedin')
  deleteCache('dustjs-helpers')

  require('dustjs-linkedin')
  return require('dustjs-helpers')
}
