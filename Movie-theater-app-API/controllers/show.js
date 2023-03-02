export const getShows = (db) => async (req, res, next) => {
    db.select("*")
      .from("show")
      .then((show) => {
        res.json(show);
      })
      .catch((err) => {
        next(err, "Invalid");
      });
  };