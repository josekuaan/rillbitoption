const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
var helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(helmet());

const DBConnect = require("./DB/ConnectDb");
const investment = require("./routes/investment");
const auth = require("./routes/auth");
const mailer = require("./routes/mailer");
const withdraw = require("./routes/withdraw");

// Load Env Vars
dotenv.config({ path: "./config/config.env" });

// Initialize DB
DBConnect();

app.use(express.json());
app.use(fileupload());
app.use(cors());
app.use(
  // [
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'https://widget.coinlib.io', 'https://coinlib.io','https://ws.coinlib.io/socket.io'],
      frameSrc: ["'self'", 'https://widget.coinlib.io', 'https://coinlib.io'],
      childSrc: ["'self'", 'https://widget.coinlib.io', 'https://coinlib.io'],
      scriptSrc: ["'self'", "'unsafe-inline'",'https://widget.coinlib.io', 'https://coinlib.io','https://unpkg.com','https://translate.google.com','https://translate.googleapis.com','https://secure.trust-provider.com'],
      styleSrc: ["'self'","'unsafe-inline'",'https://fonts.googleapis.com','https://translate.google.com','https://translate.googleapis.com'],
      fontSrc: ["'self'", 'https://maxcdn.bootstrapcdn.com', 'https: data:','https://fonts.googleapis.com'],
      imgSrc: ["'self'", 'http://www.w3.org', 'https://www.gstatic.com/','https://chart.googleapis.com','https://e-capitaloption.com/','data:'],
      baseUri: ["'self'", 'https://rillbitoption.com'],
    },
  })
  // ]
);
app.use(
  helmet.referrerPolicy({
    policy: ["origin", "unsafe-url"],
  })
);

app.use("/api/investment", investment);
app.use("/api/user/withdraw", withdraw);
app.use("/api/user/auth", auth);
app.use("/api/user/", mailer);
// console.log(path.join(__dirname, "/client/build"))
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}
app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname + "/client", "build", "index.html"));
});
// console.log((path.join(__dirname + "/client", "/build", "/index.html")))

const port = process.env.PORT || 50001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
