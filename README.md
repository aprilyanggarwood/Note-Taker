# Note Taker

## Description

This application is focus on to build the backend `JS` files as well as to connect the frontend `HTML` files by using `Express` web framwork which is a `dependency` of `NPM` package to run the code in the `locahost` and save, retrieve, and delete data from a `JSON` file.

## Table of Contents

- [Build-In](#Build-In)
- [Usage](#Usage)
- [Business-Context](#Business-Context)
- [Deploy](#Deploy)
- [Challeges](#Challeges)
- [Demo](#Demo)
- [License](#license)
- [Questions](#questions)

## Build-In

Build the two backend `JS` files: `htmlRoutes.js` and `apiRoutes.js` to connect the two frontend `HTML` files: `main.html` and `notes.html`.

- The following `HTML` routes were created for the application to be able to get the requests from client's side:

  - GET `/` - will return the `main.html` file which will run on `url: localhost:3000` to a home page of Note Tracker application.

  - GET `/notes` - will return the `notes.html` file which will run on `url: localhost:3000/notes` to the note application.

- The following `API` routes were created for the application to be able to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  - GET `/api/notes` - will read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - will receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - will receive a query parameter containing the unique id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

The `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

## Usage

User is able to write and save notes in this appllication.

User is able to delete notes he/she has written before.

User can organize his/her thoughts and keep track of tasks he/she needs to complete.

The application allow user to create and save notes, view previously saved notes, and delete previously saved notes.

## Business-Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Deploy

This Note Taker application is deployed on Heroku.

## Challeges

To `GET`,`POST`, and `DELETE` data from `JSON`.

## Demo

![note-taker](./demo/note-taker.gif)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions?

If you have any questions about this application, please feel free to reach me via the link of my [GitHub](https://github.com/aprilyanggarwood) repository and my Email: <aprilyanggarwood@gmail.com>
