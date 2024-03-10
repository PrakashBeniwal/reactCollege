import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Courses from './course'
import Syllabus from './syllabus'
import Header from '../header'
import Sidebar from '../sidebar'
import NewsBanner from '../newsBanner'
import styles from './layout.module.scss'
import Footer from '../footer'
import Fees from './fees/page'
import Contacts from './contacts/page'
import About from './about/page'
import RootDepartment from './departments'
const Root = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.main}>
                    <div className={styles.news}>
                        <NewsBanner />
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/course" element={<Courses />} />
                        <Route path="/syllabus" element={<Syllabus />} />
                        <Route path="/fees" element={<Fees />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/departments/*" element={<RootDepartment />} />
                    </Routes>
                    <div>
                    <div className={styles.footer}>
                    <Footer />

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Root