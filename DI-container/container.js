class Container {
  constructor() {
    this.factories = {};
    this.singletons = {};
  }
  register(name, factory, { singleton = true } = {}) {
    this.factories[name] = { factory, singleton };
  }
  get(name) {
    const entry = this.factories[name];
    if (!entry) throw new Error(`'${name}' not found`);
    if (entry.singleton) {
      if (!this.singletons[name]) {
        this.singletons[name] = entry.factory(this);
      }
      return this.singletons[name];
    }
    return entry.factory(this);
  }
}
module.exports = new Container();