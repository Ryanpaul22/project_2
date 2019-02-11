module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      workout: {
        type: DataTypes.DATE,
        allowNull: false
      },
    });
    return Post;
  };