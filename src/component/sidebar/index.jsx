import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.route}>
            <Link to={'/'} >Home</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/course'} >Courses</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/fees'} >Fees</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/syllabus'} >Syllabus</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/departments/computer'} >Departments</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/contacts'} >Important Contacts</Link>
        </div>
        <div className={styles.route}>
            <Link to={'/about'} >About Us</Link>
        </div>
        <div className={styles.route}>
            <Link to={'http://localhost:3000'} target='_blank' >College Panel</Link>
        </div>      
     
    </div>
  )
}

export default Sidebar