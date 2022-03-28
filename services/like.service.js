const { models } = require("../libs/sequelize");

class LikesService {
  async create(data) {
    const newLike = await models.Like.create(data);

    return newLike;
  }
}

module.exports = LikesService;
