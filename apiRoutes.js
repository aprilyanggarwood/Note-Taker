const fs = require("fs");
const db = require("./db/db.json");
const uuid = require("uuid");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// for parsing application/x-www-form-urlencoded

function notesData() {
  let data = fs.readFileSync("./db/db.json", "utf8");
  // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  let notesArray = JSON.parse(data);

  // // Give each note an ID that matches its index (this gets run for every time the page is refreshed)
  // for (let index = 0; index < notesArray.length; index++) {
  //   notesArray[index].id = "" + index;
  // }

  return notesArray;
}

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData());
  });

  // Contains key-value pairs of data submitted in the request body. (req.body)
  app.post("/api/notes", function (req, res) {
    const newArr = notesData();
    const id = uuid.v4();
    newArr.push({ ...req.body, id });
    fs.writeFileSync("./db/db.json", JSON.stringify(newArr), "utf8");
    res.json(true);
  });

  //comment
  app.delete("/api/notes/:id", function (req, res) {
    const reqDeleteID = req.params.id;
    console.log(reqDeleteID);
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const filteredData = data.filter((note) => note.id != reqDeleteID);
    fs.writeFileSync("./db/db.json", JSON.stringify(filteredData), "utf8");
    res.json(true);
  });
};
// app.get("/api/notes", function (req, res) {
//     res.json(data);

// });
// Contains key-value pairs of data submitted in the request body. (req.body)
// app.post("/api/notes", function (req, res) {
//   console.log(req.body);
//req.body contains the data sent by client
//we want to read the db.json array, add new note to it, then save it over the db.json file
//send response to client after it's successful to indicate success
// });
