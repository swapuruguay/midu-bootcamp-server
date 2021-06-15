import mongoose from 'mongoose'

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  // `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`
  `mongodb+srv://swapuruguay:${password}@cluster0.jilog.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)


if(process.argv[3]) {
  const newPerson = {name: process.argv[3], number:process.argv[4]}
  const person = new Person(newPerson)
  person.save().then(result => {
    console.log('person saved!')
    console.log(result)
    mongoose.connection.close()
  })
} else {
  Person.find({})
    .then(result => {
      console.log('phonebook:')
      result.forEach(p => {
        console.log(p.name, p.number)
      })
      mongoose.connection.close()
    })
}

