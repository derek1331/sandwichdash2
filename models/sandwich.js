module.exports = function (sequelize, DataTypes) {
  // Setting up Sandwich Model
  var Sandwich = sequelize.define("Sandwich", {
    orderid: DataTypes.FLOAT,
    sandwichid: DataTypes.REAL,
    type: DataTypes.STRING,
    bread: DataTypes.STRING,
    veggies: DataTypes.STRING,
    condiments: DataTypes.STRING
  });

  // Associating it with Info Model
  Sandwich.associate = function (models) {
    Sandwich.belongsTo(models.Info, {
      foreignKey: "orderid"
    });
  };

  return Sandwich;
};