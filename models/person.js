import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGODB_URI
console.log('connecting to', url)
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {  
      console.log('connected to MongoDB')
  })
  .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)  
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  }
})

personSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const Person = mongoose.model('Person', personSchema)