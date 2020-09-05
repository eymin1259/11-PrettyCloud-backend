const express = require('express');
const spaceDetail = require('../controllers/spaceDetail');
const allCategories = require('../controllers/allCategories');
const mainSliders = require('../controllers/mainSliders');
const todayReviews = require('../controllers/todayRecommendation');
const userReviews = require('../controllers/userReviews');
const premiumSpaces = require('../controllers/searchPremiumSpace');
const plusSpaces = require('../controllers/searchPlusSpace');
const normalSpaces = require('../controllers/searchNormalSpace');

const router = express.Router();

router.get('/slider', mainSliders.get);
router.get('/categories', allCategories.get);
router.get('/recommendation', todayReviews.get);
router.get('/reviews', userReviews.get);

router.get('/premium', premiumSpaces.get);
router.get('/plus', plusSpaces.get);
router.get('/normal', normalSpaces.get);

router.get('/detail/:spaceId', spaceDetail.get);

module.exports = router;
