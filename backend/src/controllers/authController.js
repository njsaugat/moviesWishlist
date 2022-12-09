exports.isAuthenticated = (req, res) => {
  if (req.session.isLoggedIn) {
    res.json({
      loggedIn: true,
      //   userId: req.session.user.id,
    });
  } else {
    res.json({ loggedIn: false });
  }
};
