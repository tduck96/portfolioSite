import React from 'react'
import styles from './Home.module.css'
import download from './download2.png'
// import Project from './Project';

const Home = () => {
  return (
    <div className = {styles.container}>
    {/* <h1> <i>WebDev- </i></h1> */}
      <h1 className = {styles.welcome}><i> Web development- That's what you came here for right?</i> </h1>
      <p className = {styles.languagelist}> Self-taught developer based out of Nashville, TN</p>
    <p className = {styles.languagelist}>  React, Node, MYSQL, HTML, CSS</p>
    <div className = {styles.actionContainer}>
    <a href = '/projects'><button className = {styles.actionButton}>Projects</button></a>
    <a href = '/contact'><button className = {styles.actionButton}>Contact</button></a>
    <div>
    <button className = {styles.actionButtonResume}><img src = {download} alt = 'download-resume-icon' className = {styles.loadIcon}></img>
    <p>Resume</p></button>
    </div>
    </div>
    </div>
  )
}

export default Home
