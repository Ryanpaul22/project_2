module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    Date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE
    },
    Workout: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
  return Post;
};
