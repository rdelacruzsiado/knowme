const { models } = require("../libs/sequelize");

class PublicationsService {
  async findAll() {
    const publications = await models.Publication.findAll({
      include: ["photos"],
    });
    return publications;
  }

  async findOne(id) {
    const publication = await models.Publication.findOne({
      where: { id },
      include: ["photos", "comments"],
    });
    return publication;
  }

  async create(data) {
    const newPublication = await models.Publication.create(data, {
      include: ["photos"],
    });

    return newPublication;
  }
}

module.exports = PublicationsService;
