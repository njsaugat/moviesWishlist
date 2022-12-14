const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
exports.postUser = async (req, res) => {
  console.log(req.body.body);
  const { firstname, lastname, email, password } = req.body.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      movies: {},
    },
  });
};

exports.getUser = async (req, res) => {
  let user;
  if (!req.session.user) {
    const userId = req.params.id;
    user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  } else {
    user = req.session.user;
  }
};
