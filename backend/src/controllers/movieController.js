const prisma = require('../utils/prismaClient');

exports.addMovie = async (req, res) => {
  try {
    const { movieId } = req.body.body;
    console.log(movieId);
    const newMovie = await prisma.movie.create({
      data: {
        movieId: movieId,
        user: { connect: { id: req.session.user.id } },
      },
    });
    res.send({
      movieAddedFeedback: true,
    });
  } catch (err) {
    console.log(err);
    res.send({
      movieAddedFeedback: false,
    });
  }
};

exports.getMovieWishlist = async (req, res) => {
  const moviesWishlistId = await prisma.movie.findMany({
    where: {
      userId: req.session.user.id,
    },
  });
  // console.log();
  res.send(moviesWishlistId.map((movie) => movie.movieId));
};
