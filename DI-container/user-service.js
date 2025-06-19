class UserService {
  constructor(userRepo, cache) {
    this.userRepo = userRepo;
    this.cache = cache;
  }
  async getUser(id) {
    const cached = this.cache.get(id);
    if (cached) return cached;
    const user = await this.userRepo.findUser(id);
    this.cache.set(id, user);
    return user;
  }
}
module.exports = UserService;