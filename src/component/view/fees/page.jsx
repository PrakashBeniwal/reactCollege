import React, { useEffect, useState } from 'react'
import styles from './page.module.scss';
import { Axios, routes } from '../../config';
const Fees =() => {

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

   getList();

  }, [])
  

  return (
    <div className={styles.fees}>
      <div className={styles.banner}>Note:- List of Fees and complete data mentioned in the table is effective for session 2023-24.</div>

      <div className={styles.details}>
        <table>
          <thead>
            <th>S.No</th>
            <th>Name of Course</th>
            <th>Level</th>
            <th>Medium</th>
            <th>Reg.Fee</th>
            <th>Tuition Fee</th>
            <th>Boys Fund</th>
            <th>Total</th>
          </thead>

          <tbody>
            {data.map((c,i)=>{

             return (<tr key={i}>
                <td>{i+1}</td>
                <td>{c.name}</td>
                <td>{c.level}</td>
                <td>{c.medium}</td>
                <td>₹ {c.regFee}</td>
                <td>₹ {c.fee}</td>
                <td>₹ {c.boysFund}</td>
                <td>₹ {c.totalFee}</td>
              </tr>)
            })
            }
          </tbody>
        </table>
      
      </div>
    </div>
  )
}

export default Fees;