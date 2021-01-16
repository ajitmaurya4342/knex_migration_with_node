const nodeMailer = require('nodemailer')
const config = require('config')
const user = config.get('user')
const pass = config.get('pass')


let transporter = nodeMailer.createTransport({
  host : 'smtp.gmail.com',
  transportMethod : 'SMTP',
  port: 465,
  secure: true,
  auth : {user , pass }
})


module.exports = transporter;