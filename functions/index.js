const path = require('path');

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Configura CORS y bodyParser
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to send');
  }
});

app.post('/api/contact', bodyParser.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.firstName + req.body.lastName
  const check = req.body.check
  const message = req.body.message
  const phone = req.body.phone
  const email = req.body.email
  const country  = req.body.country
  const companySize = req.body.companySize
  const company  = req.body.company
  const industry = req.body.industry

  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Phone: ${phone}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>
           <p>Country: ${country}</p>
           <p>Company: ${company}</p>
           <p>Company Size: ${companySize}</p>
           <p>Industry: ${industry}</p>
           <p>Check: ${check}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message sent' });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../out', 'index.html'));
});

// Define la función de Firebase
exports.app = functions.https.onRequest(app);