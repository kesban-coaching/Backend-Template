// const express = require("express") // COMMONJS modules
import './config.js'
import './database-connect.js' // import a script that does something, but does not export anything
import { User } from './models/User.js';

// User.find() // finds data
// User.create() // creates a NEW item in the collection (=array)
// User.findByIdAndUpdate() // updates one ITEM
// User.findByIdAndDelete() // deleted on ITEM in DB

User.find()
.then(users => {
  console.log(users)
})

// signup
// User.create({
//   firstname: "Kesban",
//   lastname: "A",
//   age: 19,
//   isAdmin: true // will get ignored, because it is not part of schema
// })
