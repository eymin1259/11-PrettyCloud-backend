require("dotenv").config();
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const { sequelize } = require("./models");

(async function () {
  try {
    // db connection
    await sequelize.authenticate();
    await sequelize
      .sync({ force: true, alter: true })
      .then(() => console.log("DB SYNCED"));

    // server open
    server.listen(process.env.PORT, () => {
      console.log(`SERVER IS LISTENING TO PORT: ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("DB CONNECTION ERROR");
    console.log(err);
  }
})();