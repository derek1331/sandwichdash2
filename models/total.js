module.exports = function (sequelize, DataTypes) {
  // Setting up Total Model
  var Total = sequelize.define(
    "Total", {
      orderid: DataTypes.FLOAT,
      total: DataTypes.INTEGER
    }, {
      timestamps: false
    }
  );

  // Associating it with Info Model
  Total.associate = function (models) {
    Total.belongsTo(models.Info, {
      foreignKey: "orderid"
    });
  };
  return Total;
};