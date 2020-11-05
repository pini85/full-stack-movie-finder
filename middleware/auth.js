module.exports = (req, res, next) => {
  const user = req.body.user;
  console.log(user);
  next();
};

//check if the user is auth
//if yes go to next
//if not throw an error
