exports.createMovie = (req, res) => {
  try {
    const movie = {
      title: req.body.title,
      watched: true,
      user: req.body.user,
      token: req.headers.authorization,
    };
    res.status(200).send({ movie: movie, message: "movie successfully created" });
  } catch (error) {
    res.status(500).send({ message: "no movie created" });
  }
};

exports.moviesList = (req, res) => {
    try {
    const movieList ={
        user: req.body.user
    };
    res.status(200).send({ movieList });
}   catch (error) {
    res.status(500).send({ message: "unable to get movie list"});
}
};

// exports.updateMovie = (req, res) => {
//     try {
//         const updateMovie = {}
//     }
// }