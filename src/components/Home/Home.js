import React from 'react'
import styles from './Home.module.css'
import download from './download2.png'
import linkedin from './linkedin.png';
import github from './github.png';
// import Project from './Project';

const Home = () => {
  return (
    <div className = {styles.container}>
    {/* <h1> <i>WebDev- </i></h1> */}
      <h1 className = {styles.welcome}><i> Web development- That's what you came here for right?</i> </h1>
      <p className = {styles.languagelist}> <i> Self-taught developer based out of Nashville, TN</i></p>
    <p className = {styles.languagelist}> <i> React, Node, MYSQL, HTML, CSS</i></p>
    <div className = {styles.actionContainer}>
    <a href = '/projects'><button className = {styles.actionButton}>Projects</button></a>
    <a href = '/contact'><button className = {styles.actionButton}>Contact</button></a>
    <a href = 'https://docs.google.com/document/d/1DafivuBgcfkVgdE49oQ4DS2GMlVuwhpWRvAh2_WZp1I/edit?usp=sharing' target = "_blank"><button className = {styles.actionButton}>Resume</button></a>
    </div>
   
    </div>
  )
}

export default Home
