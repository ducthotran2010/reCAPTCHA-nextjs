const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const secretKey = "6Ldy80YUAAAAALYOjB782-1eh-4ZXYRudF6vZznF"

app.prepare().then(() => {
   var server = express()
   server.use(bodyParser.json())
   server.use(bodyParser.urlencoded({extended : false}))
   server.post('/',(req,res) => {
      if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
         return res.json({"responseCode": 1, "responseDesc": "Please select captcha"})

      }
      var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`
      request(verificationUrl,function(error,response,body) {
         body = JSON.parse(body)
         if(body.success !== undefined && !body.success) {
            return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"})
         }
         res.json({
            "responseCode" : 0,
            "responseDesc" : "Sucess",
            "email": req.body['email'],
            "content": req.body['content']
         })
      })
   })

   server.get('*' , (req, res) => {
      handle(req, res)
   })
   server.listen(port, (err) => {
      if (err) throw err
      console.log((new Date()).toString())
      console.log(`\x1b[42m%s\x1b[0m`,`> Ready on http://localhost:${port}`)
      })
   })
