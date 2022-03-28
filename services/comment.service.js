const { models } = require("../libs/sequelize");

class CommentsService {
  async findAll() {
    const comments = await models.Comment.findAll();
    return comments;
  }

  async findOne(id) {
    const comment = await models.Comment.findByPk(id);
    return comment;
  }

  async create(data) {
    const newComment = await models.Comment.create(data);

    return newComment;
  }
}

module.exports = CommentsService;
