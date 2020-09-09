const express = require('express')
const router = express.Router();

const { registerValidation  } = require ('../validation')

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');

const db = require('../data/mysql')






router.post('/register', async (req, res) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
    
    }
  });

 
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).json(error.details[0].message) 

   
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)

    let token = jwt.sign({userName: req.body.userName}, process.env.TOKEN_SECRET,{expiresIn:'55m'}  )


    const mailOptions = {

      from: process.env.USER_EMAIL,
      to: req.body.email,
      subject: 'Subject of your email',
      
      html: '<a href = "http://localhost:4200/Confir/' + token + '">Click here to active your account.</a>'
    
    };

    let nameP = {
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      password: hash,

     
    }

     db.query('SELECT * FROM users WHERE email = ?', nameP.email,function(err,rows){

        if(err) {
          // db.end();
          return console.log(err);
          
        }

    if (!rows.length)
    {
        db.query('INSERT INTO users SET ?',nameP,function(err, results){
            // db.end();
            return res.json({token:token}),

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
               
        });
    }
    else
    {
        return res.send("email already in");
     }
    });
     
    })






    



 

 module.exports = router;


