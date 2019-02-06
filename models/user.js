module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.DATE,
      username: DataTypes.STRING,
      password: DataTypes.TEXT
    });

//     User.associate = function(models) {
//     // Associating User with Posts
//     // When an User is deleted, also delete any associated Posts
//     User.hasMany(models.Example, {
//       onDelete: "cascade"
//     });
//   };

    return User;
  };