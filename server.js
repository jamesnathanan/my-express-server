const express = require('express')

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send('<h1 style="color: red;">Araiwa , Quy Quy</h1>')
})

app.get("/contact", (req, res) => {
    res.send("<h4>emailme @: jiranathanan@gmail.com</h4>")
})

app.get("/about", (req, res) => {
    res.send("<h5>I am web developer, mobile app developer from Chiang Mai, Thailand</h5>")
})

app.get("/hobby", (req, res) => {
    res.send("<h3>My hobbies are coding and learning</h3>")
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})