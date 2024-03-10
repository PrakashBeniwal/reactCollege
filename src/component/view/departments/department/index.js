import React, { useEffect, useState } from 'react'
import styles from './../page.module.scss'
import { Axios, routes } from '../../../config'
import { useParams } from 'react-router-dom'
const Dep =() => {

  const {name}=useParams()

    const [data, setData] = useState([])

    const getList=()=>{
       Axios.get(`${routes.getdepartmentName}?name=${name}`).then((result) => {
        if (result) {  
          setData(result.data.list[0])
          return;
        }
        return;
      }).catch((err) => {
          throw new Error(err);
      })
    }

    useEffect(() => {
     getList();
    }, [name])
    

  return (
    <div className={styles.container}>

      {  data?.image &&
      <div >
      <img src={`/${data?.image.split('/').pop()}`} width={10} height={10} alt='department' />
      </div>
      }

      <div className={styles.content}>
         {data?.about}
      </div>

    </div>
  )
}

export default Dep;