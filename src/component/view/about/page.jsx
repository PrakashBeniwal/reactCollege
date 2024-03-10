import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { routes } from '../../config'
const About =  () => {

    const [data, setdata] = useState([]);
    const [member, setMember] = useState([])

    const getData = async() => {
        fetch(routes.getCollege,{cache:"no-store"})
        .then(async(result) => {
            if (result.ok) {
              let res=await result.json()
              setdata(res.list)
              return;
            }
            return [];
          }).catch((err) => {
              throw new Error(err);
          })
    }

    const getMember = async() => {
        fetch(routes.getMember,{cache:"no-store"}).then(async(result) => {
            if (result.ok) {
              let res=await result.json()
              setMember(res.list)
              return;
            }
            return [];
          }).catch((err) => {
              throw new Error(err);
          })
    }

    useEffect(() => {
      getData()
    getMember()
    }, [])
    

    return (
        <div className={styles.about}>

            <div className={styles.member}>
                {
                    member?.map((m) => {
                        return (
                            <div key={m.id}>
                                <img src={m?.image?.split('/').pop()} alt={m.name} />
                                <span>{m.name}</span>
                                <span>{m.post}</span>
                            </div>
                        )
                    })
                }


            </div>

            <div className={styles.simity}>
                <div className={styles.photo}>
                    <img src={data?.simityPhoto?.split('/').pop()} alt="simity" />
                </div>

                <div className={styles.content}>
                    {data.about}
                </div>
            </div>

        </div>
    )
}

export default About