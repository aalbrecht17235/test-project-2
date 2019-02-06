module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    highlight: DataTypes.STRING,
    positive: DataTypes.STRING,
    negative: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
