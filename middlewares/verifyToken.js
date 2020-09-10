const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

verifyToken = async (req, res, next) => {
  try{
    req.decoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    return next();
  } catch(err) {
    return res.status(401).json({
      code: 401,
      message: 'TOKEN_MALFORMED'
    })
  }
}

router.post('/test', verifyToken, (req, res) => {
  res.json(req.decoded);
})

module.exports = router;