var db = require("../models");

module.exports = function (app) {
  // Get route for retrieving a single post from api/orders
  app.get("/api/orders/:name", function (req, res) {
    db.Info.findOne({
      where: {
        name: req.params.name
      }
    }).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Delete route for api/orders
  app.delete("/api/orders/:name", function (req, res) {
    db.Info.destroy({
      where: {
        name: req.params.name
      }
    }).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Get route for retrieving all data from api/sandwiches
  app.get("/api/sandwiches", function (req, res) {
    db.Sandwich.findAll({}).then(function (dbSandwich) {
      res.json(dbSandwich);
    });
  });

  // Post route for submitting data to api/sandwiches
  app.post("/api/sandwiches", function (req, res) {
    db.Sandwich.create(req.body).then(function (dbSandWich) {
      res.json(dbSandWich);
    });
  });

  // Delete route for api/sandwiches
  app.delete("/api/sandwiches/:sandwichid", function (req, res) {
    db.Sandwich.destroy({
      where: {
        sandwichid: req.params.sandwichid
      }
    }).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Delete route for api/sides
  app.delete("/api/sides/:sideid", function (req, res) {
    db.Side.destroy({
      where: {
        sideid: req.params.sideid
      }
    }).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Delete route for api/sandwiches
  app.delete("/api/drinks/:drinkid", function (req, res) {
    db.Drink.destroy({
      where: {
        drinkid: req.params.drinkid
      }
    }).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Get route for retrieving all data from api/sides
  app.get("/api/sides", function (req, res) {
    db.Side.findAll({}).then(function (dbSide) {
      res.json(dbSide);
    });
  });

  // Post route for submitting data to api/sides
  app.post("/api/sides", function (req, res) {
    db.Side.create(req.body).then(function (dbSide) {
      res.json(dbSide);
    });
  });

  // Get route for retrieving all data from api/drinks
  app.get("/api/drinks", function (req, res) {
    db.Drink.findAll({}).then(function (dbDrink) {
      res.json(dbDrink);
    });
  });

  // Post route for submitting data to api/drinks
  app.post("/api/drinks", function (req, res) {
    db.Drink.create(req.body).then(function (dbDrink) {
      res.json(dbDrink);
    });
  });

  // Get route for retrieving all data from api/info
  app.get("/api/info", function (req, res) {
    db.Info.findAll({}).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Post route for submitting data to api/info
  app.post("/api/info", function (req, res) {
    db.Info.create(req.body).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Get route for retrieving all data from api/total
  app.get("/api/total", function (req, res) {
    db.Total.findAll({}).then(function (dbTotal) {
      res.json(dbTotal);
    });
  });

  // Post route for submitting data to api/total
  app.post("/api/total", function (req, res) {
    db.Total.create(req.body).then(function (dbTotal) {
      res.json(dbTotal);
    });
  });

  // Joins data from all modlels--need to fix
  app.get("/api/orders", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    db.Info.findAll({
      include: [{
        all: true
      }]
    }).then(function (Info) {
      const resObj = Info.map(function (customer) {
        // Tidy up the info data
        return Object.assign({}, {
          orderid: customer.orderid,
          ordered_at: customer.order,
          name: customer.name,
          building: customer.building,
          room_number: customer.room,
          details: customer.details,
          total: customer.Totals.map(function (Totals) {
            // Tidy up the post data
            return Object.assign(Totals.total);
          }),
          sandwiches: customer.Sandwiches.map(function (Sandwiches) {
            // Tidy up the post data
            return Object.assign({}, {
              type: Sandwiches.type,
              bread: Sandwiches.bread,
              veggies: Sandwiches.veggies,
              condiments: Sandwiches.condiments
            });
          }),
          sides: customer.Sides.map(function (Sides) {
            // Tidy up the post data
            return Object.assign(Sides.sides);
          }),
          drinks: customer.Drinks.map(function (Drinks) {
            // Tidy up the post data
            return Object.assign(Drinks.drinks);
          })
        });
      });

      res.json(resObj);
    });
  });
};