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
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Post;
  };