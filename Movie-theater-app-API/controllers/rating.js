export const getRatings = (db) => async (req, res, next) => {
  db.select("*")
    .from("ratings")
    .orderBy("date","desc")
    .then((rating) => {
      res.json(rating);
    })
    .catch((err) => {
      next(err, "Invalid credientials");
    });
};

export const createRating = (db) => async (req, res, next) => {
  const { username, comment, movieid, date, stars } = req.body;

  db.insert({
    username: username,
    comment: comment,
    movieid: movieid,
    date: date,
    stars: stars,
  })
    .into("ratings")
    .returning("*")
    .then((rating) => {
      res.json(rating[0]);
    })
    .catch((err) => {
      next(err);
    });
};
