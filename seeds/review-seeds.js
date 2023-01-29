/* eslint-disable max-len */
const { Reviews } = require("../models");

const reviewsData = [
  {
    review:
      "Not gonna lie, wasn't sure how I'd feel about the vampire from Twilight being Batman, but he was pretty Bad Ass. Dark movie. Paul Dano as Riddler was creepy, but great.",
    movie_id: 1,
    user_id: null,
  },
  {
    review: "Robert Pattinson Is My New Favorite Super Hero.",
    movie_id: 1,
    user_id: null,
  },
  {
    review: "2 PAWS ALL THE WAY UP!!",
    movie_id: 1,
    user_id: null,
  },
  {
    review:
      "@Michelle_Yeoh is my Sherpa. She is so cool, and absolutely rocks in this quirky/cool thriller! #GooglyEyes",
    movie_id: 2,
    user_id: null,
  },
  {
    review: "The guy from Stranger Things as a brutal Santa Claus?! SCHWING!",
    movie_id: 3,
    user_id: null,
  },
  {
    review:
      "Colin Farrell and Brendan Gleason team up again in this dark comedy set in old time Ireland. The humor is twisted, but delightful, and the coastal town they inhabit is stunning. #IrelandGoals",
    movie_id: 7,
    user_id: null,
  },
  {
    review: "A WHODUNNIT DUN RIGHT - TWO PAWS & 1 TAIL UP!",
    movie_id: 13,
    user_id: null,
  },
  {
    review:
      "Hitchcock, Carpenter, Craven, Poole. The Mt. Rushmore of Horror/Thriller Directors. Nope solidifies Poole's place in the pantheon of fear inducing movies.",
    movie_id: 14,
    user_id: null,
  },
  {
    review:
      "Hated it. Walked out of the theatre because the acting was more wooden than Pinocchio.",
    movie_id: 6,
    user_id: null,
  },
  {
    review: "WILL FERRELL HITS MY FUNNY BONE - ONE AND A HALF PAWS UP!",
    movie_id: 5,
    user_id: null,
  },
  {
    review:
      "Brad Pitt, Leo DiCaprio & Margot Robbie? Sign me up for this please. #Superstars #LeoShouldHave8Oscars",
    movie_id: 8,
    user_id: null,
  },
  {
    review: "Smile!? More like BIG FROWN. Too creepy for me!",
    movie_id: 9,
    user_id: null,
  },
  {
    review:
      "Northman is one of best films I watched all year! The story of Norse mythology that it tells really gripped me.  And there was some really amazing performances from the whole cast. Must Watch!",
    movie_id: 4,
    user_id: null,
  },
  {
    review:
      "...Ultimately, Prey for the Devil is a very hammy movie that almost feels like it was made in the 80s. It was fine, sort of nostalgic, but not something to write home about.",
    movie_id: 10,
    user_id: null,
  },
  {
    review: "X DOES NOT MARK THE SPOT! ALL PAWS ON THE GROUND. IT WAS RUFF!",
    movie_id: 11,
    user_id: null,
  },
  {
    review:
      "Thank god I did not pay for it. Hereditary is a movie that did not need to be made. Of course, no movie ever needs to be made, but Hereditary is a movie that really did not need to be made, more so than other movies that have been made.",
    movie_id: 12,
    user_id: null,
  },
];

const seedReviews = () =>
  Reviews.bulkCreate(reviewsData, { individualHooks: true, returning: true });

module.exports = seedReviews;