const express = require("express");
const nodemailer = require('nodemailer');
 
// emailRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /email.
const emailRoutes = express.Router();
emailRoutes.route("/").get(function(req,res){
    //MailChipmp etc goes here to send the email data to turbotiler1@msn.com
    res.json("succesS")
})

emailRoutes.route("/email").post(function(req,res){
console.log(req)
let newDate = new Date()
//MailChipmp etc goes here to send the email data to turbotiler1@msn.com
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'colindavid.nelson@gmail.com',
      pass: 'aqad ncvd htxq xqxy'
    }
  });
  
  const mailOptions = {
    from: 'colindavid.nelson@gmail.com',
    to: 'turbotiler@msn.com',
    subject: "Website Request: " + req.body.name + " - " + req.body.phone,
    text: req.body.message + "\n ---------------- \n" + req.body.email + "\n" + newDate
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      // do something useful
      res.json("success")
    }
  });
})

module.exports= emailRoutes;
