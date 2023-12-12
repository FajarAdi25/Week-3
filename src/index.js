const express = require("express")
const app = express()
const cors = require("cors")
const port = 2000
const userRouter = require("./routes/userRoute")

app.use(cors())
app.use(express.json())

app.use(userRouter)

app.get("/", (req, res) => {
  res.send('API has running')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})