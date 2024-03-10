import React from 'react'
import styles from './page.module.scss'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main className={styles.home}>
       
    <div className={styles.main}>
   <div className={styles.header}>
     <div>College</div>
     <div>Notifications/Instructions</div>
    </div>

    <div className={styles.content}>
       <div className={styles.college}>comming soon</div>
       <div className={styles.notification}>
           <Link to={'/notification/helo'}>M.Sc. Semester-I Examination Form 2023-24 Start Notification</Link>
           <Link to={'/notification/yelo'}>M.Sc. Semester-I Examination Form 2023-24 Start Notification</Link>
       </div>
    </div>

    </div>

 </main>
  )
}

export default Home