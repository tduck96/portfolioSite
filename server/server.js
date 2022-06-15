const express = require('express');
const app = express();
const cors = require('cors')
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors())

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



console.log(message)
smtpTransport.close();
})


app.listen(3001, () => {
    console.log(`Server running on port 3001`)
})