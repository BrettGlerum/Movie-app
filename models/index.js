const conCat = require("./conCat");
const Users = require("./users");
const Concessions = require("./concessions");
const Genres = require("./genre");
const Movies = require("./movies");
const Reviews = require("./reviews");
const Showings = require("./showings");

// Users.hasMany(Movies, {
//   foreignKey: 'movie_id',
// });
// Movies.belongsToMany(Users, {
//   foreignKey: 'movie_id',
// });
Genres.hasMany(Movies, {
  foreignKey: "genre_id",
});
Movies.belongsTo(Genres, {
  foreignKey: "genre_id",
});
Concessions.belongsTo(conCat, {
  foreignKey: "category_id",
});
conCat.hasMany(Concessions, {
  foreignKey: "category_id",
});
Movies.hasMany(Reviews, {
  foreignKey: "movie_id",
});
Reviews.belongsTo(Movies, {
  foreignKey: "movie_id",
});
Movies.hasMany(Showings, {
  foreignKey: "movie_id",
});
Showings.belongsTo(Movies, {
  foreignKey: "movie_id",
});
Users.hasMany(Reviews, {
  foreignKey: "user_id",
});
Reviews.belongsTo(Users, {
  foreignKey: "user_id",
});

module.exports = {
  Users,
  Reviews,
  conCat,
  Concessions,
  Showings,
  Movies,
  Genres,
};