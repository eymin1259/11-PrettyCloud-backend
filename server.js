require('dotenv').config();
const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const { sequelize } = require('./models');

(async function () {
  try {
    // db connection
    await sequelize.authenticate();
    await sequelize
      .sync({ force: false, alter: true })
      .then(() => console.log('DB SYNCED'));

    // server open
    server.listen(process.env.SERVER_PORT, () => {
      console.log(`SERVER IS LISTENING TO PORT: ${process.env.SERVER_PORT}`);
    });
  } catch (err) {
    console.log('DB CONNECTION ERROR');
    console.log(err);
  }
})();