const sequelize = require("../config/database");

const initModels = require("./init-models");
const models = initModels(sequelize);

(async () => {
  try {
    await sequelize.authenticate();

    console.log(" Connexion a la base de données réussie");
  } catch (err) {
    console.log("Erreur de la connexion a la base de données :", err);
  }
})();

module.exports = {sequelize, models}