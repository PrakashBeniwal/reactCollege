import React from 'react'
import styles from './index.module.scss'
const NewsBanner = () => {
  return (
    <div className={styles.banner}>
      <div >
      <marquee  behaviour={"scroll"} scrollamount={8} scrolldelay={100} direction="left">
      Last date for M.Sc. Semester I Exam Form is 27 Jan 2024 *** बी.ए./बी.कॉम./बी.एससी. प्रथम द्वितीय व तृतीय वर्ष के परीक्षा फॉर्म महाविद्यालय में जमा करवाने की अंतिम तिथी 12 जनवरी 2024 है (परीक्षा फॉर्म जमा करवाने का यह अंतिम अवसर है विद्यार्थी इसे सर्वोच्च प्राथमिकता दे)Last date for M.Sc. Semester I Exam Form is 27 Jan 2024 *** बी.ए./बी.कॉम./बी.एससी. प्रथम द्वितीय व तृतीय वर्ष के परीक्षा फॉर्म महाविद्यालय में जमा करवाने
      </marquee>

      </div>
    </div>
  )
}

export default NewsBanner

