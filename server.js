const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const router = require('./src/routes/route');
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './frontend/build/index.html'),
    function (err) {
      res.status(500).send(err);
    }
  );
});

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

app.use('/', router);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
