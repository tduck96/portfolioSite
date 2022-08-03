import React from 'react'
import moviePoster from './assets/moviePosterReal.png'
import prettyPrints from './assets/prettyprintsmobile.png';
import newsreel from './assets/screenshotnews.png';

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
        <p className ={styles.smallDetails}> Designed and developed full stack ecommerce storefront with the use of React, Node/Express and mySQL </p>
        <p className = {styles.builtwith}> <i>  End result is a sleek, clean UI in which client can purchase photography prints through secure payment portal via the Stripe API </i></p>
        <a href = 'https://github.com/tduck96/ecom' target = "_blank" className = {styles.githubLink}>GitHub</a>
      </div>

      </div>
      <div className = {styles.projectCard}>

        <a href = 'https://www.youtube.com/watch?v=_BpyQ4pZtl0'  target= "_blank">
        <img src = {newsreel} alt = '' className = {styles.poster}></img></a>
      
      <div className = {styles.descriptionFields}>
        <h1 className={styles.projectTitle}> Duck's Newsreel </h1>
        <p className ={styles.smallDetails}> Developed a front-end web application that utilizes React Context API to manage state,  and React hooks to implement search/sort features with the data from a third party endpoint </p>
        <p className = {styles.builtwith}> <i>End result is delightful user experience that allows client to easily traverse through breaking news stories</i></p>
        <a href = 'https://github.com/tduck96/newsreel' target = "_blank" className = {styles.githubLink}>GitHub</a>
        </div>
        </div>

      <div className = {styles.projectCard}>

      <a href = 'https://movie-2nc3hss45-tduck96.vercel.app/'  target= "_blank">
      <img src = {moviePoster} alt = '' className = {styles.poster}></img></a>
      
      <div className = {styles.descriptionFields}>
        <h1 className={styles.projectTitle}> Move the Movies Around </h1>
        <p className = {styles.smallDetails}>Implemented third party IMDb API endpoint to fetch data about various films </p>
        <p className = {styles.builtwith}> <i> End result is a quirky web application that allows client to keep track of their favorite movies and television shows,  as well as keep in mind movies for future viewings</i></p>
        <a href = 'https://github.com/tduck96/movieApp' target = "_blank" className = {styles.githubLink}>GitHub</a>
        </div>
        </div>

        
</div>
</div>
    
  )
}

export default Projects
