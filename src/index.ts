require('dotenv').config()
import main from './app'

main()
  .then((app) => {
    const port = process.env.PORT || 3000
    app.listen(port)
    console.log(`Running on ${port}`)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
