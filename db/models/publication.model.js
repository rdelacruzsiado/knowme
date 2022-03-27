const { Model, DataTypes, Sequelize } = require("sequelize");

const PUBLICATION_TABLE = "publications";

const PublicationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "user_id",
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    comment: "0 is equal to removed and 1 is equal to active",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Publication extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "publicationId",
    });
    this.hasMany(models.Like, {
      as: "likes",
      foreignKey: "publicationId",
    });
    this.hasMany(models.Photo, {
      as: "photos",
      foreignKey: "publicationId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PUBLICATION_TABLE,
      modelName: "Publication",
      timestamps: false,
    };
  }
}

module.exports = { PUBLICATION_TABLE, PublicationSchema, Publication };
