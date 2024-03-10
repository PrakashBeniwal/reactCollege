import React from 'react'
import styles from './page.module.scss'
import { Navigation } from './navigation';
import { Route, Routes } from 'react-router-dom';
import Dep from './department';

const RootDepartment = () => {
  return (
    <div className={styles.root}>
        <Navigation/>
        <Routes>
        <Route path="/:name" element={<Dep/>} />

        </Routes>
    </div>
  )
}

export default RootDepartment;