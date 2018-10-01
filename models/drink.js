module.exports = function (sequelize, DataTypes) {
  // Setting up drink Model
  var Drink = sequelize.define("Drink", {
    orderid: DataTypes.FLOAT,
    drinkid: DataTypes.REAL,
    drinks: DataTypes.STRING
  });

  // Associate Drink Model with Info Model
  Drink.associate = function (models) {
    Drink.belongsTo(models.Info, {
      foreignKey: "orderid"
    });
  };

  return Drink;
};