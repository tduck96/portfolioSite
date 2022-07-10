const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
     res.header(
       "Access-Control-Allow-Headers",
       ["Origin, X-Requested, Content-Type, Accept"],

       res.header("Access-Control-Allow-Methods",
       "POST, PUT, PATCH, GET, DELETE, OPTIONS")
     )
     res.header("Access-Control-Allow-Credentials", "true")

    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      res.header("Access-Control-Allow-Origin", "*")
      res.header(
        "Access-Control-Allow-Headers",
        ["Origin, X-Requested, Content-Type, Accept"]);
      return res.status(200).json({})
    }
    next()
  })

app.get('/', (req, res) => {
    res.send('hey')
})

app.post('/api/send', (req, res) => {
    
let message = req.body;
let smtpTransport = nodemailer.createTransport({
    service:'outlook',
    auth: {
        user: 'thomas.duckworth96@outlook.com',
        pass: 'Pizza-hut96!'
    }
});

let mailOptions = {
    from: 'thomas.duckworth96@outlook.com',
    to: 'thomas.duckworth96@gmail.com',
    subject: `Message from ${message.name}`,
    html: `

    <h3>Information:</h3>
    <ul>
    <li> Name : ${message.name}</li>
    <li> Email: ${message.email} </li>
    <li> Telephone: ${message.phone} </li>
    </ul>
    <h3> Message </h3>
    <p> ${message.message}`
};
smtpTransport.sendMail(mailOptions, function(err, info) 
{
    if (err){
    console.log(err)
    return;
    }
    console.log(`Sent ${info.response}`)
})


smtpTransport.close();
res.send('Thank You');
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port 3001`)
})