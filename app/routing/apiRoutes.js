var characters = require("../data/characters");

module.exports = function (app) {
  
  app.get("/api/characters", function (req, res) {
    res.json(characters);
  });

  app.post("/api/characters", function (req, res) {

    var bestMatch = {
      characterName: "",
      sinName: "",
      photo: "",
      characterDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData['scores[]'];

    var totalDifference;

    for (var i = 0; i < characters.length; i++) {
      var currentCharacter = characters[i];
      totalDifference = 0;

      console.log(currentCharacter.name);

      for (var j = 0; j < currentCharacter.scores.length; j++) {
        var currentCharacterScore = currentCharacter.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentCharacterScore));
      }

      if (totalDifference <= bestMatch.characterDifference) {
        bestMatch.name = currentCharacter.name;
        bestMatch.photo = currentCharacter.photo;
        bestMatch.characterDifference = totalDifference;
      }
    }

    characters.push(userData);

    res.json(bestMatch);
  });
};