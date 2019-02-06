module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.DATE,
      username: DataTypes.STRING,
      password: DataTypes.TEXT
    });
    return User;
  };