import React, { useEffect, useState } from 'react'
import styles from './page.module.scss';
import { Axios, routes } from '../../config';
import { Link } from 'react-router-dom';
const Contacts =() => {

  const [data, setData] = useState([])

  const getList = () => {
    Axios.get(routes.getContact)
        .then((r) => {
            if (r.data.list) {
              setData(r.data.list)
                return;
            }
        }).catch((err) => {
          throw new Error(err);
      })
}

useEffect(() => {
  getList()

}, [])


  return (
    <div className={styles.Contacts}>
      <div className={styles.banner}>
       <span>
       Important Contact list (Call between 10.00 AM - 03.00 PM on working days only)
       </span> 
      <span> Important Instructions:- Please see college website for regular updates</span>
       
      </div>

      <div className={styles.details}>
        <table>
          <thead>
            <th>S.No</th>
            <th>Related work</th>
            <th>Contact No</th>
            <th>Email ID</th>
          </thead>

          <tbody>
            {data.map((c,i)=>{

             return (<tr key={c.id}>
                <td>{i+1}</td>
                <td>{c.relatedWork}</td>
                <td><Link href={`tel:+${c.number}`}>{c.number}</Link> </td>
                <td>{c.email}</td>
              </tr>)
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contacts;