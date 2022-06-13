import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import duck from './tomduckfullstack2.png'
const Nav = () => {
  return (
    <nav className = {styles.navContainer}>
      <div className = {styles.brand}>
      
      <Link to ='/'> <img src = {duck} alt = 'duck' className ={styles.duckLogo}></img></Link>
      
      </div>
      <ul className = {styles.navItems}>
          <li> 
              <Link to ='/projects'>Projects</Link>
          </li>
          <li>
              <Link to ='/contact'> Contact </Link>
          </li>
      </ul>
    </nav>

  )
}

export default Nav
