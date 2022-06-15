import React, {useState} from 'react'
import styles from './Contact.module.css'

const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');
const [emailObject, setEmailObject] = useState([]);

const submitForm = (e) => {

  setEmailObject({
    name: name, 
    email: email,
    phone: phone,
    message: message
  })

}
console.log(emailObject);
  return (
    <div className = {styles.boxContainer}>
      <h2 className = {styles.contactPhrase}>  GET IN TOUCH</h2>

      <form className = {styles.contactFormContainer}>
      
      <div className = {styles.formHoldit}>
        <ul className = {styles.contactInfo}>
          <input type = 'text' placeholder = 'Name*' className = {styles.input} onChange={(e) =>  setName(e.target.value)}></input>
          <input type = 'text' placeholder = "Email Address*" className = {styles.input}onChange={(e) => setEmail(e.target.value)}></input>
          <input type = 'text' placeholder = "Phone Number*" className = {styles.input} onChange={(e) =>  setPhone(e.target.value)}></input>
       </ul>

          <div className = {styles.bodyContainer}>
          <input type = 'text' placeholder="Any details of information you wish to provide" className = {styles.inputBody} onChange={(e) => setMessage(e.target.value)}></input>
          </div>
          </div>
          
      </form>
      <button type ='submit' className = {styles.submitButton} onClick = {submitForm}>Send</button>
    </div>
  )
}

export default Contact
