const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  },
  cellphone: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.DATE,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,
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

class User extends Model {
  static associate(models) {
    this.hasMany(models.Publication, {
      as: "publications",
      foreignKey: "userId",
    });
    this.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "userId",
    });
    this.hasMany(models.Like, {
      as: "likes",
      foreignKey: "userId",
    });
    this.hasMany(models.Photo, {
      as: "photos",
      foreignKey: "userId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
