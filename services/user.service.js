const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class UsersService {
  async findAll() {
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({ where: { email } });
    return user;
  }

  async create(data) {
    const passwordHashed = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: passwordHashed,
    });
    delete newUser.dataValues.password;

    return newUser;
  }
}

module.exports = UsersService;
