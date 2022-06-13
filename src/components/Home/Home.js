import React from 'react'
import styles from './Home.module.css'
import loadIcon from './downloadicon.png'
import download from './download2.png'

const Home = () => {
  return (
    <div className = {styles.container}>
    <h1> <i>Web development, </i></h1>
      <h3 className = {styles.welcome}> That's what you came here for, right? </h3>
    <p className = {styles.languagelist}> HTML, CSS, JS, React, NODEJS, MYSQL</p>
    <div className = {styles.actionContainer}>
    <a href = '/projects'><button className = {styles.actionButton}>Projects</button></a>
    <a href = '/contact'><button className = {styles.actionButton}>Contact</button></a>
    <div className = {styles.resumeContainer}>
    
    <img src = {download} alt = 'download-resume-icon' className = {styles.loadIcon}></img>
    <p>resume(pdf)</p>
    
    </div>
    </div>
    </div>
  )
}

export default Home
