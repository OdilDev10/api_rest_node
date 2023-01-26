import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT, () => console.log(`127.0.0.1 listening on port ${PORT}!`))



