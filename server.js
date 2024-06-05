const express = require('express')
const cors = require('cors')
const { generateText, generateImage } = require('./controller/openaiController')

const app = express()
app.listen(4000, () => console.log('listening port 4000'))

app.use(express.json())
app.use(cors({
  origin: '*',
}))

app.post('/openai/text', generateText)
app.post('/openai/image', generateImage)
