import { Schema, model } from "mongoose";

// SCHEMA => rules for each item in a collection (=array in database)
const schema = new Schema({
  firstname: String, 
  lastname: String,
  age: Number
})

// setup model
// model talks to ONE array in the database
// model makes all operations: read, filter, create, update, delete
export const User = model("User", schema) // User => in Database: users

