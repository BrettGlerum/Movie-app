// eslint-disable-next-line new-cap
const router = require('express').Router();
const userRoutes = require('./users-routes');
const moviesRoutes = require('./movies-routes');
const concessionRoutes = require('./concessions-routes');

router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);
router.use('/concessions', concessionRoutes);

module.exports = router;