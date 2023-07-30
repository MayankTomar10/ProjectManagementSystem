import nodemailer from 'nodemailer';

export function sendMail(email,password){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mt1617875@gmail.com',
    pass: 'sbvwkxkgbhiuaovx'
  }
});

// acception : eror handling 

var mailOptions = {
  from: 'mt1617875@gmail.com',
  to: email,
  subject: 'Varification mail PMS',
  html: "<h1>Welcome to Project Management System</h1>You have successfully register to our site , your login credentials are atteched below<h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h2>Click on the link below to varify your account</h2>http://localhost:3000/varifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}