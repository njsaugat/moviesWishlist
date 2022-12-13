const prisma = require('../utils/prismaClient');
const nodemailer = require('nodemailer');
const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const axios = require('axios');

function calculateTime(timePeriod) {
  timePeriod = timePeriod.toLowerCase();
  switch (timePeriod) {
    case 'now':
      return 0;
    case '5mins':
      return 5 * 60 * 1000;
    case '1hr':
      return 60 * 60 * 1000;
    case '12hrs':
      return 12 * 60 * 60 * 1000;
    case '24hrs':
      return 24 * 60 * 60 * 1000;
    default:
      return 0;
  }
}

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  // port:587,
  // secure:false,
  auth: {
    user: 'njsaugat@outlook.com',
    pass: '$Saugat2058',
  },
});

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

exports.setMovieReminder = async (req, res) => {
  try {
    let { movieId, setReminder } = req.body.body;
    setReminder = JSON.parse(setReminder);
    console.log(setReminder);
    let intervalPeriod = calculateTime(setReminder.label);
    console.log(intervalPeriod);
    const { data } = await axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}?${api_key}`,
      method: 'get',
    });
    // const { data } = await movie.json();
    const movie = data;
    console.log(movie);

    await transporter.sendMail({
      to: req.session.user.email,
      from: 'njsaugat@outlook.com',
      subject: `Watch '${movie.title}' Now! `,
      html: `
      <div>

      <h1> We remind you to watch ${movie.title}</h1>
      <img src=${
        IMAGE_URL + movie.poster_path
      } alt="Image" width="160" height="288">
      <section style="word-wrap: break-word">${movie.overview}</section>
      </div>
      `,
    });
    await res.send({
      mailSentFeedback: true,
    });
    // setTimeout(
    //   intervalPeriod
    // );
  } catch (err) {
    console.log(err);
    res.send({
      mailSentFeedback: false,
    });
  }
};
