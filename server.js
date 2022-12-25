const express = require('express');
const app = express();
const frontendApp = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const router = require('./src/routes/route');
// const { createProxyMiddleware } = require('http-proxy-middleware')

// var apiProxy = createProxyMiddleware('/api', { target: 'http://localhost:3001' });
// var frontendProxy = createProxyMiddleware('/', { target: 'http://localhost:3000' });

// app.use(apiProxy);
// app.use(frontendProxy);
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './frontend/build')));
{
  /* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />;
          <Route path="/home" element={<Home />} />;
          <Route path="/movie/:id" element={<ShowMovie />} />;
          <Route path="/movies-wishlist" element={<MoviesWishlist />} />
          <Route path="movies/search/:searchTerm" element={<ShowMovies />} />;
          <Route
            path="movies/genre/:genreName/:id" */
}

//             router.post('/user', postUser);

// router.post('/login', postLoginInfo);

// router.post('/add-movie', addMovie);

// router.get('/user/:id', getUser);

// router.get('/movies-wishlist-ids', getMovieWishlist);

// router.post('/movie-reminder', setMovieReminder);

// router.post('/logout', logout);

// router.get('/isAuthenticated', isAuthenticated);
function getIndex(_, res) {
  res.sendFile(
    path.join(__dirname, './frontend/build/index.html'),
    function (err) {
      res.status(500).send(err);
    }
  );
}
app.get('/', getIndex);
app.get('/login', getIndex);
app.get('/signup', getIndex);
app.get('/home', getIndex);
app.get('/movie/:id', getIndex);
app.get('/movies-wishlist', getIndex);
app.get('/movies/search/:searchTerm', getIndex);
app.get('/movies/genre/:genreName/:id', getIndex);

app.use(
  session({
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.use('/api', router);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
