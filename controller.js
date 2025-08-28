// This is the only function that will be called by the endpoint.
function print(req, res) {
  // For testing lint job..
  // const unused = 42;
  res.send("Hello world!!");
}

function getHome(req, res) {
  res.send("This is the home page");
}

function createUser(req, res) {
//   console.log(req.body);
  if (
    req.body.name === undefined ||
    req.body.email === undefined ||
    req.body.password === undefined
  ) {
    res.status(400).send("Name, email, and password are required");
  } else {
    res
      .status(201)
      .send({ data: { id: 1, name: req.body.name, email: req.body.email } });
  }
}

module.exports = { print, getHome, createUser };
