const fs = require('fs')

module.exports = {
  loadDataSync(path) {
    const raw = fs.readFileSync(path,'utf8')
    return raw.split('\n').map(Number)
  }
}