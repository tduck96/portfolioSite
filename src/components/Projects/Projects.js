import React from 'react'
import moviePoster from './assets/moviePosterReal.png'
import prettyPrints from './assets/prettyprintsmobile.png';

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div>
      <div className = {styles.centerHead}>
      </div>
      <div className = {styles.projectContainer}>
      <div className = {styles.projectCard}>
      <a href = 'https://katiesprettyprints.herokuapp.com/'  target="_blank" >
        <img src = {prettyPrints} alt = '' className = {styles.poster}></img>
      </a>
      <div className = {styles.descriptionFields}>
        <h1 className = {styles.projectTitle}> Katies Pretty Prints</h1>
        <p className ={styles.smallDetails}> A small e-commerce protype used to sell prints of my girlfriends photography. </p>
        <p className = {styles.builtwith}> Built with <i>  React frontend, express Node server, MYSQL database, and Stripe API </i></p>
        <a href = 'https://github.com/tduck96/ecom' target = "_blank" className = {styles.githubLink}>GitHub</a>
      </div>

      </div>
      <div className = {styles.projectCard}>

      <a href = 'https://movie-2nc3hss45-tduck96.vercel.app/'  target= "_blank">
      <img src = {moviePoster} alt = '' className = {styles.poster}></img></a>
      
      <div className = {styles.descriptionFields}>
        <h1 className={styles.projectTitle}> Move the Movies Around </h1>
        <p className ={styles.smallDetails}>  I wanted to build an app that would consume a third party API.</p>
        <p className = {styles.builtwith}> <i> React frontend consuming imdB api for data</i></p>
        <a href = 'https://github.com/tduck96/movieApp' target = "_blank" className = {styles.githubLink}>GitHub</a>
        </div>
        </div>
</div>
</div>
    
  )
}

export default Projects
