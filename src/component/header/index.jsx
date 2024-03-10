import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Sidebar from '../sidebar'
import { Axios, routes } from '../config'
import { Link } from 'react-router-dom'
const Header = () => {

    const [sidebar, setSidebar] = useState(true);
 
    const [data, setData] = useState({
        name:"",
        city:"",
        university:"",
        universityLogo:"",
        collegeLogo:""

    })
    const hide = () => {
        setSidebar(!sidebar);
        return;
    }

    useEffect(() => {
      
        Axios.get(routes.getCollege)
        .then((r)=>{
            if (r.data.list) {
                setData(r.data.list)
            }
        })

    }, [])
    


    return (
      
            <div className={styles.header}>
                <div className={`${styles.leftbar} ${sidebar && styles.hide}`}>
                    <div className={styles.back} onClick={hide} />
                    <div className={styles.sidebar}>
                        <Sidebar />
                    </div>
                </div>


                <Link href={'/'} className={styles.logo}>
                    <img src={data.collegeLogo.split('/').pop()} width={65} height={65} alt='kuchaman' />
                </Link>

                <div className={styles.name}>
                    <div className={styles.college}>
                        {data?.name} , {data.city} city
                    </div>
                    <div className={styles.univercity}>
                        Affiliated to {data.university}
                    </div>
                </div>

                <div className={styles.logo2}>
                    <img src={data.collegeLogo.split('/').pop()} width={65} height={65} alt='kuchaman' />
                </div>

                <div className={styles.hamburger} onClick={hide}>
                    <div>---</div>
                    <div>---</div>
                    <div>---</div>
                </div>

            </div>
      
    )
}

export default Header;