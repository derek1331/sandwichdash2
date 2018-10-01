module.exports = function (sequelize, DataTypes) {
  // Setting up Info Model
  var Info = sequelize.define(
    "Info", {
      orderid: {
        type: DataTypes.FLOAT,
        primaryKey: true
      },
      name: DataTypes.STRING,
      building: DataTypes.STRING,
      room_number: DataTypes.STRING,
      details: DataTypes.STRING
    }, {
      updatedAt: "order"
    }
  );

  // Associate Info with the other 4 models
  Info.associate = function (models) {
    Info.hasMany(models.Side, {
      foreignKey: "orderid"
    });
    Info.hasMany(models.Sandwich, {
      foreignKey: "orderid"
    });
    Info.hasMany(models.Drink, {
      foreignKey: "orderid"
    });
    Info.hasMany(models.Total, {
      foreignKey: "orderid"
    });
  };

  return Info;
};