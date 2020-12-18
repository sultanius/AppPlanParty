const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')


const app = express()

//Connect Database
connectDB();

//init middleware
app.use(express.json({ extended:false }))
app.use(cors())

app.get('/', (req, res)=> {
  res.send('API Running...')
})

//Define Rotes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/newparty', require('./routes/parties'))
app.use('/api/myparties', require('./routes/myParties'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))