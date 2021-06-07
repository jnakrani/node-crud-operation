const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./app/routes/user.routes');
const reservationRoutes = require('./app/routes/reservation.routes');
const registrationRoutes = require('./app/routes/registration.routes');
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/config/db.config");

// user api
app.use("/api/auth", userRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/registration", registrationRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to staff application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
