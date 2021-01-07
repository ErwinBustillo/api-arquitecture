const BaseRepository = require("./base.repository");
let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUsername(username) {
    console.log(_user)
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
