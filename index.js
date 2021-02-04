const path = require('path')
const express = require('express')
const siteRouter = require('./routes/router')

const port = 3000
const app = express()

app.locals.deployVersion = new Date().getTime();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middleware
app.use(express.static(path.join(__dirname, 'public')))

// router
app.use(siteRouter)

app.listen(port, () => {
    console.log(`app is runing on http://localhost:${port}`)
})