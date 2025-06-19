const locator = require('./locator')

class ReportGenerator {
  async generate(id) {
    const cache = locator.get('cache')
    let report = cache.get(id)
    if (!report) {
      const api = locator.get('apiClient')
      report = await api.fetchReport(id)
      cache.set(id,report)
    }
    return report
  }
}

module.exports = ReportGenerator