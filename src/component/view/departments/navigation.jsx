import { Link, useLocation } from 'react-router-dom'
import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import { Axios, routes } from '../../config';
export function Navigation() {
  const path=useLocation()
  let pathname=path.pathname;
  const [data, setData] = useState([])

  const getList=()=>{
     Axios.get(`${routes.getdepartment}`).then((result) => {
      if (result) {  
        setData(result.data.list)
        return;
      }
      return;
    }).catch((err) => {
        throw new Error(err);
    })
  }

  useEffect(() => {
   getList();
  }, [])
  return (
    <div className={styles.nav}>
      {
        data?.map(d=>{
          return( <Link className={pathname === `/departments/${d.name}` ? styles.active : styles.inactive} to={`/departments/${d.name}`}>{d.name}</Link>)
        })
      }
        </div>
  )
}