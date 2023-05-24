import mongoose from "mongoose";

// connect to database
const MONGO_URI = process.env.MONGO_URI;

  // mongoose connect like fetch => when successful we get to THEN handler or CATCH handler if not succesful
mongoose.connect(MONGO_URI)
.then(() => {
  console.log("Connection successful!")
})
.catch((err) => {
  console.log("Connection failed", err.message)
})
