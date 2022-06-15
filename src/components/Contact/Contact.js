
import React, {useState} from 'react'
import styles from './Contact.module.css'
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
await axios.post('http://localhost:3001/api/send', emailBody)
.then(res => alert('message sent sucessfully'))
.catch(function(error) {
  alert('Something went wrong try again later!');
})

}


sendMail();
resetForm();
}

  return (
    <div className = {styles.boxContainer}>
      <h2 className = {styles.contactPhrase}>  GET IN TOUCH</h2>

      <form className = {styles.contactFormContainer}>
      
      <div className = {styles.formHoldit}>
        <ul className = {styles.contactInfo}>
          <input type = 'text' placeholder = 'Name*' className = {styles.input} value = {name}onChange={(e) =>  setName(e.target.value)}></input>
          <input type = 'text' placeholder = "Email Address*" className = {styles.input} value = {email}onChange={(e) => setEmail(e.target.value)}></input>
          <input type = 'text' placeholder = "Phone Number*" className = {styles.input} value = {phone}onChange={(e) =>  setPhone(e.target.value)}></input>
       </ul>

          <div className = {styles.bodyContainer}>
          <input type = 'text' placeholder="Any details of information you wish to provide" className = {styles.inputBody} value = {message}onChange={(e) => setMessage(e.target.value)}></input>
          </div>
          </div>
          
      </form>
      <button type ='submit' className = {styles.submitButton} onClick = {submitForm}>Send</button>
    </div>
  )
}

export default Contact
