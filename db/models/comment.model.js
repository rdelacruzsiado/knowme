const { Model, DataTypes, Sequelize } = require("sequelize");

const COMMENT_TABLE = "comments";

const CommentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  comment: {
    allowNull: false,
    type: DataTypes.TEXT,
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

class Comment extends Model {
  static associate(models) {
    this.belongsTo(models.Publication, { as: "publication" });
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: "Comment",
      timestamps: false,
    };
  }
}

module.exports = { COMMENT_TABLE, CommentSchema, Comment };
