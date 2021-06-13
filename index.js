import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
const getId = () => {
  const min = 10
  const max = 1000
  return Math.floor(Math.random() * (max - min + 1) + min)
}



app.use(express.json())
app.use(cors())
morgan.token('type', function (req) { 
  if(req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  return null
})

app.use(morgan(':method :url :status :res[content-length] :response-time ms :type'))


app.get('/', (req, res) => {
  res.end('Hola Mundo')
})

app.get('/info', (req, res) => {
  const text = `<p>Phonebook has info  for ${persons.length} people</p>
                <p>${new Date().toString()}</p>`
  res.send(text)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const retorno = persons.filter(p => p.id === id )
  if(retorno.length === 0) {
    res.status(404).end()
  } else {
    res.json(retorno)
  }
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  person.id = getId()
  if (!req.body.name || !req.body.number) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }

  if(persons.filter(p => p.name.indexOf(person.name)> -1).length > 0) {
    return res.status(400).json({error: 'name must be unique'})
  }
  
  persons.push(person)
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

app.listen(3001, () => {
  console.log('Escuchando puerto 3001')
})