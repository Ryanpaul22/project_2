var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/profile.html"));
  });

  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/newUser.html"));
  });

  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/calendar.html"));
  });

};
