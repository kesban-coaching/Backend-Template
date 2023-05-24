// const express = require("express") // COMMONJS modules
import './config.js'
import './database-connect.js' // import a script that does something, but does not export anything
import { User } from './models/User.js';
import express from 'express'

// create an API where we can put ROUTES on 
// that the frontend can call
const app = express()

// register JSON parser
// parse incoming JSON data and store it in req.body variable
app.use(express.json()) // => req.body

// HOME ROUTE
app.get("/", (request, response) => {
  response.send("<h2>Hello from API</h2>")
})

app.get("/users", async (request, response) => {

  // await WAITS for the data to get returned from database
  // afterwards we can have the users directly (without then)
  const users = await User.find();
  response.json(users)

  // User.find()
  // .then((users) => {
  //   // User.find will give me all users from database as ARRAY
  //   // that array we can send back to the frontend using response.json() method
  //   response.json(users)    
  // })
})

// a POST route can get data from frontend
app.post("/users", async (req, res) => {

  console.log("Body: ", req.body)

  // await until user is created in database
  const userNew = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    isAdmin: true, // will get ignored, because it is not part of schema
  });

  // send created user back to frontend
  res.json(userNew)
})

// start API
// make routes available to frontend!

// take pprt from environment config
// if no port configured in environment => take default 5000
const port = process.env.PORT || 5000 
app.listen(port, () => {
  console.log(`Backend started on http://localhost:${port}`)
})

// User.find() // finds data
// User.create() // creates a NEW item in the collection (=array)
// User.findByIdAndUpdate() // updates one ITEM
// User.findByIdAndDelete() // deleted on ITEM in DB

