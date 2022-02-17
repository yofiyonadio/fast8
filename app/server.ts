import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import history from 'connect-history-api-fallback'
import session from 'express-session'

import { Migrate, Route, Color, Middleware, ENV } from './registry'

class Server { }

const _instance = new Server()

config()

const app = express()
const port = ENV.APP_PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}))

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}))

app.use((req, res, next) => {
  Middleware.default(req, res, next)
})

Route.routing(app)

const staticPath = express.static(__dirname + '/public')
app.use(staticPath)
app.use(history({
  disableDotRule: true,
  verbose: true,
}))
app.use(staticPath)

app.listen(port, async () => {
  await Migrate.sync()
  Logger('  ---------- (Fast8 Technical Test) server started on: ---------', _instance, Color.pink)
  Logger('  ------------------ http://localhost:' + port + ENV.APP_API_URL + ' -----------------', _instance, Color.green)
})