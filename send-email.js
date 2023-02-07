
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

var nodemailer=require('nodemailer');
const { CLIENT_RENEG_LIMIT } = require('tls');
var transport = nodemailer.createTransport({
    service:'gmail',
    auth :{
        user:'21bma028@nith.ac.in',
        pass:'bbaaybbvmzqrrfwl'
    }
});
module.exports.sendVerifyMail =(req,res,next)=>{



 console.log(req.body)

 const otp = req.body.otp;
 const roll = req.body.roll;

    const mailOptions ={
        from:'21bma028@nith.ac.in',
        to:`${roll}@nith.ac.in`,
        // to:'souvikgarai14@gmail.com',
        subject:'Roomate verification',
        text:`Your otp for verification is:- ${otp}`,
    
    };
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
    
        }else{
            console.log('Email sent: '+info.response);
        }
    });
    
    next();

}








// config.action_mailer.smtp_settings = {
//     address:              'priyanshusingh0520@gmail.com',
//     port:                 587,
//     domain:               'gmail.com',
//     user_name:            '21bma028@nith.ac.in',
//     password:             '210310465246',
//     authentication:       'plain'
  
//   }



