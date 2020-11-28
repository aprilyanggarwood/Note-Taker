const express = require("express");

// const bodyParser = require("body-parser");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

//always have these 2 lines

//Express will serve static files in public and data directories
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log("server is running on port 3000!"));

// parse application/x-www-form-urlencoded

// parse application/json
