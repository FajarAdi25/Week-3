const express = require('express')
const app = express()
const cors = require('cors')
const port = 2000
const userRouter = require('./routes/userRoute')
const recipeRouter = require('./routes/recipeRoute')

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(recipeRouter)

app.get('/', (req, res) => {
  res.send('API has running')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
