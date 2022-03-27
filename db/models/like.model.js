const { Model, DataTypes, Sequelize } = require("sequelize");

const LIKE_TABLE = "likes";

const LikeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  publicationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "publication_id",
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

class Like extends Model {
  static associate(models) {
    this.belongsTo(models.Publication, { as: "publication" });
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LIKE_TABLE,
      modelName: "Like",
      timestamps: false,
    };
  }
}

module.exports = { LIKE_TABLE, LikeSchema, Like };
