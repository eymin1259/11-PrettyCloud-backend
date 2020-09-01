
const router = function (app) {
    app.use('/', ( req, res,next) => {
        res.send("welcome node server");
    });
};
  
module.exports = router;