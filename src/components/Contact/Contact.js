
import React, {useState} from 'react'
import styles from './Contact.module.css'
import linkedin from './linkedin.png';
import github from './github.png'
const axios = require('axios');

const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');



const submitForm = (e) => {
e.preventDefault();

  let emailBody = {
    name: name, 
    email: email,
    phone: phone,
    message: message
  }
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    alert('Success! Thanks for reaching out!')
  }

async function sendMail()  {
await axios.post('https://serverformynodemailer.herokuapp.com/api/send', emailBody)
.then(res => alert('message sent sucessfully'))
 .catch(function(error) {
   alert('Something went wrong try again later!');
 })

}


sendMail();
resetForm();
}

  return (
    <div>
    <div className = {styles.boxContainer}>
      <h2 className = {styles.contactPhrase}> Reach out, I'll be with you as  soon as possible.</h2>

      <form className = {styles.contactFormContainer}>
      
      <div className = {styles.formHoldit}>
       
          <input type = 'text' placeholder = 'Name*' className = {styles.input} value = {name}onChange={(e) =>  setName(e.target.value)}></input>
          <input type = 'text' placeholder = "Email Address*" className = {styles.input} value = {email}onChange={(e) => setEmail(e.target.value)}></input>
          <input type = 'text' placeholder = "Phone Number*" className = {styles.input} value = {phone}onChange={(e) =>  setPhone(e.target.value)}></input>
          <textarea placeholder="Any details you wish to provide" className = {styles.inputBody}  value = {message }onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          
          
      </form>
      <button type ='submit' className = {styles.submitButton} onClick = {submitForm}>Send</button>
    </div>
    <div className = {styles.contactFooter}>
    <a href = 'https://www.linkedin.com/in/thomasduckworthdev//' target = "_blank"><img src = {linkedin} alt = '' className = {styles.linkedin}></img></a>
    <a href = 'https://github.com/tduck96' target = "_blank"><img src = {github} alt = '' className = {styles.github}></img></a>

    </div>
    </div>
  )
}

export default Contact
