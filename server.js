const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const server = express()

var PORT = process.env.PORT || 3000

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.get('/', function(req, res) {
    res.send("Hi, I'm a chatbot!")
})

server.get('/webhook/', function(req,res) {
    if (req.query['hub.verify_token'] === 'rkimmi') {
        res.send(req.query['hub.challenge'])
    }
    res.send("wrong token, sorry")
})

module.exports = server