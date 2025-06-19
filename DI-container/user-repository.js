
class UserRepository {
  constructor(db) {
    this.db = db
  }
  findUser(id) {
    return this.db.query(`SELECT * FROM users WHERE id=${id}`)
  }
}
module.exports = UserRepository
