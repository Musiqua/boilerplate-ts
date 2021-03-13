import Koa from 'koa'
import cors from '@koa/cors'
import bodyparser from 'koa-bodyparser'
import api from './api'

export default async () => {
  console.log('Starting up')
  const app = new Koa()
  app.use(cors())
  app.use(bodyparser())
  app.use(api())
  return app
}
