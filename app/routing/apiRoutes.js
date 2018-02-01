var tableData = require("../data/friends");

module.exports = function (app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friend);
    });

    app.post("/api/friends", function (req, res) {
      
    });   
};