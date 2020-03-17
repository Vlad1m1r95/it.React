const Sequelize = require('sequelize')
const bodyParser = require("body-parser")
const express = require('express')
const app = express()
const DB_NAME = 'ReactAdminPanel'
const DB_BASE = 'postgres'
const DB_BASE_PREFIX = 'postgressql'
const DB_PASSWORD = 'Rimider1701'
const DB_HOST = 'localhost'
const DB_PORT = '5432'
const DP_CONNECT_PATH = `${DB_BASE_PREFIX}://${DB_BASE}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`



const db = new Sequelize('ExpressDb', 'postgres', 'Rimider1701', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false,
  },
})

const EMPLOYEES_TABLE = db.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contractor: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
})

db.sync()
  .then(result => {
    console.log(result.rows)
  })
  .catch(err => console.log(err))


const { Client } = require('pg')

const client = new Client({
  connectionString: DP_CONNECT_PATH,
})

client.connect()


app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", function (request, response) {
  // response.render("./pages/index.hbs")
  response.send("hello")
})
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
})


// app.use((request, response, next) => {
//   response.header('Access-Control-Allow-Origin', '*')
//   response.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// })

// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/employees', function (request, response) {
  let employees = []
  client.query('SELECT * FROM employees', (err, result, fields) => {
    employees = [result.rows]
    response.send(employees)
    console.log('employees')
  })
})

app.post('/employees', function (request, response) {
  console.log(request.body.name)

  EMPLOYEES_TABLE.create({
    name: request.body.name,
    position: request.body.position,
    contractor: request.body.contractor,
  })
    .then(res => {
      console.log(`Cотрудник  добавлен`)
      console.table(request.body)
    })
    .catch(err => console.log(err))

  response.send(`Сотрудник добавлен  в базу данных`)
})

app.get('/contact', function (request, response) {
  response.send('<h1>Контакты</h1>')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
