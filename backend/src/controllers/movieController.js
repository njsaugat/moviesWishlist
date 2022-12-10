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
    await res.send({
      movieAdded: true,
    });
  } catch (err) {
    console.log(err);
    res.send({
      movieAdded: false,
    });
  }
};
