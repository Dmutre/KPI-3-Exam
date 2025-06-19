class Locator {
  constructor() {
    this.services = {};
  }

  register(key, instance) {
    this.services[key] = instance;
  }

  get(key) {
    return this.services[key];
  }
}

module.exports = new Locator();