// eslint-disable-next-line new-cap
const router = require("express").Router();
const { Reviews, Users, Movies, Showings } = require("../../models");

// CREATE new review
router.post("/", async (req, res) => {
  try {
    const dbReviewData = await Reviews.create({
      review: req.body.review,
      movie_id: req.body.id,
      user_id: req.session.user_id,
    });
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbReviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const ReviewData = await Reviews.findAll({
      include: [
        {
          model: Movies,
          attributes: ["title"],
        },
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(ReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const ReviewData = await Users.findAll();
    res.status(200).json(ReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Test route for identifying structure of nested routes
// router.get("/movie/:id", async (req, res) => {
//   try {
//     const dbMovieData = await Movies.findByPk(req.params.id, {
//       include: [
//         {
//           all: true,
//           nested: true,
//         },
//         // {
//         //   model: Reviews,
//         //   attributes: ["review", "movie_id", "id", "user_id"],
//         // },
//         // {
//         //   model: Showings,
//         //   attributes: ["times", "tickets_available", "ticket_cost"],
//         // },
//       ],
//     });
//     res.status(200).json(dbMovieData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;