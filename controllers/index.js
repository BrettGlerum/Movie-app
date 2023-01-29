// eslint-disable-next-line new-cap
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage');

router.use('./', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
