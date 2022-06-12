import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className = {styles.boxContainer}>
      <h2 className = {styles.contactPhrase}>  GET IN TOUCH</h2>

      <form className = {styles.contactFormContainer}>
      
      <div className = {styles.formHoldit}>
        <ul className = {styles.contactInfo}>
          <input type = 'text' placeholder = 'Name*' className = {styles.input}></input>
          <input type = 'text' placeholder = "Email Address*" className = {styles.input}></input>
          <input type = 'text' placeholder = "Phone Number*" className = {styles.input}></input>
       </ul>

          <div className = {styles.bodyContainer}>
          <input type = 'text' placeholder="Any details of information you wish to provide" className = {styles.inputBody}></input>
          </div>
          </div>
          
      </form>
      <button type ='submit' className = {styles.submitButton}>Send</button>
    </div>
  )
}

export default Contact
