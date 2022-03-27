const { User, UserSchema } = require("./user.model");
const { Publication, PublicationSchema } = require("./publication.model");
const { Comment, CommentSchema } = require("./comment.model");
const { Like, LikeSchema } = require("./like.model");
const { Photo, PhotoSchema } = require("./photo.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Publication.init(PublicationSchema, Publication.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize));
  Like.init(LikeSchema, Like.config(sequelize));
  Photo.init(PhotoSchema, Photo.config(sequelize));

  User.associate(sequelize.models);
  Publication.associate(sequelize.models);
  Comment.associate(sequelize.models);
  Like.associate(sequelize.models);
  Photo.associate(sequelize.models);
}

module.exports = setupModels;
