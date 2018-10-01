module.exports = function (sequelize, DataTypes) {
  // Setting up Side Model
  var Side = sequelize.define(
    "Side", {
      orderid: DataTypes.FLOAT,
      sideid: DataTypes.REAL,
      sides: DataTypes.STRING
    }, {
      timestamps: false
    }
  );

  // Associating it with the Info Model
  Side.associate = function (models) {
    Side.belongsTo(models.Info, {
      foreignKey: "orderid"
    });
  };

  return Side;
};