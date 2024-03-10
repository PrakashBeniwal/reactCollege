import React, { useEffect, useState } from 'react'
import styles from './page.module.scss';
import { Axios, routes } from '../../config';
const Courses = () => {

    const [data, setData] = useState([])

const getList=()=>{
  Axios.get(routes.getcourse)
    .then(result => {
      if (result.data) {
        setData(result.data.list)
        return ;
      }
      return [];
    }).catch((err) => {
        throw new Error(err);
    })
}

useEffect(() => {
 getList()
}, [])

  
  return (
    <div className={styles.courses}>
      <div className={styles.banner}>Note:- List of Courses and complete data mentioned in the table is effective for session 2023-24.</div>

      <div className={styles.details}>
        <table>
          <thead>
            <th>S.No</th>
            <th>Name of Course</th>
            <th>Level</th>
            <th>Duration</th>
            <th>Type</th>
            <th>Admission Process</th>
            <th>Mode of Admission</th>
          </thead>

          <tbody>
            {data.map((c, i) => {

              return (<tr key={i}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.level}</td>
                <td>{c.duration}</td>
                <td>{c.type}</td>
                <td>{c.admissionProcess}</td>
                <td>{c.modeOfAdmission}</td>
              </tr>)
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Courses;