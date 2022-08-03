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
        <p className ={styles.smallDetails}> Web application that consumes imdB API for data. Application allows user to implement basic CRUD actions with said data, adding different films to a favorites or watch list. </p>
        <p className = {styles.builtwith}> <i> React frontend consuming imdB api for data</i></p>
        <a href = 'https://github.com/tduck96/movieApp' target = "_blank" className = {styles.githubLink}>GitHub</a>
        </div>
        </div>

        <div className = {styles.projectCard}>

        <a href = 'https://www.youtube.com/watch?v=_BpyQ4pZtl0'  target= "_blank">
        <img src = {moviePoster} alt = '' className = {styles.poster}></img></a>
      
      <div className = {styles.descriptionFields}>
        <h1 className={styles.projectTitle}> Duck's Newsreel </h1>
        <p className ={styles.smallDetails}> Developed a front-end web application that utilizes React Context API to manage state,  and React hooks to implement search/sort features with the data from a third party endpoint </p>
        <p className = {styles.builtwith}> <i>End result is delightful user experience that allows client to easily traverse through breaking news stories</i></p>
        <a href = 'https://github.com/tduck96/newsreel' target = "_blank" className = {styles.githubLink}>GitHub</a>
        </div>
        </div>
</div>
</div>
    
  )
}

export default Projects
