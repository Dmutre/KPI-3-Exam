class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async fetchReport(id) {
    return { id, data: [1,2,3] };
  }
}

module.exports = ApiClient;