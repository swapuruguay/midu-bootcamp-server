import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import {Person} from './models/person.js'


const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('type', function (req) { 
  if(req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  return null
})


const unknownEndpoint = (_, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.use(morgan(':method :url :status :res[content-length] :response-time ms :type'))


app.get('/', (req, res) => {
  res.end('Hola Mundo')
})

app.get('/info', (req, res) => {
  Person.countDocuments()
    .then(c => {
      const text = `<p>Phonebook has info for ${c} people
                  <p>${new Date().toString()}</p>`
      res.send(text)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if(person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res) => {
  const body = req.body

  const person = {
    number: body.number
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(person => {
      res.json(person)
    })
})

app.post('/api/persons', (req, res, next) => {
  const newPerson = req.body
  if (body.content === undefined) {
    return res.status(400).json({ error: 'content missing' })  
  }
  const person = new Person(newPerson)
  person.save().then(result => {
    res.json(result.toJSON())
  })
  .catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res) => {
 Person.findByIdAndRemove(req.params.id)
  .then(() => {
    res.status(204).end()
  })
  .catch(err => next(err))
})


app.use(unknownEndpoint)

const errorHandler = (error, _, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`)
})