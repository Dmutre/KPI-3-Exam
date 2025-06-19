class CacheService {
  constructor() {
    this.store = new Map();
  }

  get(key) {
    return this.store.get(key);
  }

  set(key,val) {
    this.store.set(key,val);
  }
}

module.exports = CacheService;