import Router from 'koa-router'
import Hello from './hello'

const router = new Router()

router.get('/', async (ctx) => {
  ctx.response.body = Hello()
})

router.get('/ping', async (ctx) => {
  ctx.response.body = 'pong!'
})

export default () => {
  return router.routes()
}
