require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productsRouter = require('./routes/products')

//express app
const app = express()


//middleware

app.use(express.json())

//middle ware : it is used to get the next processes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/products/', productsRouter)

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
    
    app.listen(process.env.PORT, ()=> {
        console.log('connected to database and listening on port 4000..')
    })
 
})
.catch((error) => {
    console.log(error)
})



