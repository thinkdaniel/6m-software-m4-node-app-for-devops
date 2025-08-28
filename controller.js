// This is the only function that will be called by the endpoint.
function print(req, res) {
  // const unused = 42;
  res.send("Hello world! It's a great day!");
}

function getHome(req, res) {
  // return new ResponseEntity<>(...);
  res.send("This is the home page.");
}

function createUser(req, res) {
  if (
    req.body.name === undefined ||
    req.body.email === undefined ||
    req.body.password === undefined
  ) {
    res.status(400).send("Name, email and password are required.");
  } else {
    res
      .status(201)
      .send({ data: { id: 1, name: req.body.name, email: req.body.email } });
  }
}

module.exports = { print, getHome, createUser };
