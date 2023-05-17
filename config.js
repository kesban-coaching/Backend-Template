import dotenv from 'dotenv'

// reads content of .env file and stores it in special object process.env
const config = dotenv.config() 

console.log(config)
