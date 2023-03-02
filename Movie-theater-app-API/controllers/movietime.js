export const getMovietime = (db) => async (req, res, next) => {
  db.select("*")
    .from("movietime as mo")
    .innerJoin("oraret as o", "mo.orarid", "o.oid")
    .innerJoin("days", "mo.ditaid", "days.did")
    .innerJoin("movies as m","mo.movieid" ,"m.movieid")
    .then((show) => {
      res.json(show);
      console.log(show);
    })
    .catch((err) => {
      next(err, "Invalid");
    });
};
