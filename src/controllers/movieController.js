const prisma = require('../utils/prismaClient');
const nodemailer = require('nodemailer');
const api_key = process.env.api_key;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const axios = require('axios');
const calculateTime = require('../utils/calculateTime');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  // port:587,
  // secure:false,
  auth: {
    user: 'cinewishes@outlook.com',
    pass: process.env.MAIL_PASSWORD,
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
  console.log('reached to wishlist');
  const moviesWishlistId = await prisma.movie.findMany({
    where: {
      userId: req.session.user.id,
    },
  });
  console.log(moviesWishlistId);
  res.json(moviesWishlistId.map((movie) => movie.movieId));
  // res.json([1, 2, 3, 4, 5, 6, 7]);
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
      from: 'cinewishes@outlook.com',
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
