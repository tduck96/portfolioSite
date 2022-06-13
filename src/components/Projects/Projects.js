import React from 'react'
import moviePoster from './assets/moviePosterReal.png'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div>
      <div className = {styles.centerHead}>
      <h1> Check it</h1>
      </div>
      <a href = 'https://movie-2nc3hss45-tduck96.vercel.app/'  target="_blank" ><div className = {styles.projectContainer}>
        <p className ={styles.title}> IMDb App</p>
        <img src = {moviePoster} alt = '' className = {styles.poster}></img>
      </div></a>
    </div>
  )
}

export default Projects
