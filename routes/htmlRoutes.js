var db = require("../models");
var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/info", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/info.html"));
  });

  app.get("/order", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
  });

  app.get("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/nutrition", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/nutrition.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/checkout", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });

  app.get("/Admin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/admintwo.html"));
  });
};