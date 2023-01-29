// eslint-disable-next-line new-cap
const router = require('express').Router();
const {Movies, Users} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all movies and JOIN with user data
    const movieData = await Movies.findAll({
      include: [
        {
          model: Users,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({plain: true}));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const movieData = await Movies.findByPk(req.params.id, {
    });

    const movies = movieData.get({plain: true});

    res.render('movies', {
      ...movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
    });

    const user = userData.get({plain: true});

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
