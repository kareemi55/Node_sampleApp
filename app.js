const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send('hello i am happy to make deployments on aws ')
})
const port = 5000;
app.listen(port, (req, res) => {
   console.log('listen on port number 5000')
})
