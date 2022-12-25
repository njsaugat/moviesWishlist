const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
exports.postLoginInfo = async (req, res) => {
  console.log(req.body.body);
  const { email, password } = req.body.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log(user);
  if (passwordMatch) {
    req.session.user = {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
    };
    req.session.isLoggedIn = true;
    console.log(req.session);
    res.send({ loggedIn: true });
    return req.session.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    res.send({ loggedIn: false });
  }
};

exports.logout = (req, res) => {
  console.log(req.session);
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send('Unable to log out');
      } else {
        res.send('Logout successful');
      }
    });
  }
};
