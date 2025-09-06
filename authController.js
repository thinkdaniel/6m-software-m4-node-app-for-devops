const jwt = require("jsonwebtoken");

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ error: "Username and password are required." });
  }

  if (username !== "daniel" || password !== "password") {
    return res.status(401).send({ error: "Invalid username or password." });
  }

  // Generate JWT
  const token = jwt.sign({ username }, "NVNh119k8oEJXjr2raB9TXOciCprjFzZNDWgBmHwYuuDb/YpcPzw5zhvtye+jLwv", {
    expiresIn: "1h",
  });

  // Strict: browser refuses to attach the JWT cookie because request originated from another site
  // res.cookie("JWT", token, { httpOnly: true, sameSite: "Strict" });

  // Lax: browser sends the JWT cookie on same-site requests and cross-site top-level navigations (via link click)
  // This makes CSRF attacks possible
  res.cookie("JWT", token, { httpOnly: true, sameSite: "Lax" });

  res.send({ token });
}

function logout(req, res) {
  res.clearCookie("JWT");
  res.send({ message: "Logged out successfully." });
}

function transfer(req, res) {
  const { to, amount } = req.query;

  // Check if cookies are present
  const token = req.cookies.JWT;
  if (!token) {
    console.log("No token found. You are not logged in.");
    return res
      .status(401)
      .send({ error: "No token found. You are not logged in." });
  }

  // Verify JWT in cookie
  jwt.verify(token, "SECRET_AT_LEAST_32_CHARS_LONG", (err, decoded) => {
    if (err) {
      console.log("Invalid token. You are not authorized.");
      return res
        .status(401)
        .send({ error: "Invalid token. You are not authorized." });
    }

    console.log("✅ Token verified:", decoded);

    console.log(`✅ Transfer of $${amount} to ${to} successful.`);
    // If verification is successful, proceed with the transfer
    res
      .status(200)
      .send({ message: `✅ Transfer of $${amount} to ${to} successful.` });
  });
}

module.exports = { login, logout, transfer };
