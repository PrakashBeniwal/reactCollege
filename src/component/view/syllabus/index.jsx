import React, { useEffect, useState } from 'react'
import styles from './page.module.scss';
import { Axios, routes } from '../../config';
import { Link } from 'react-router-dom';
const Syllabus = () => {

  const [type, setType] = useState("Annual")
  const [anualList, setAnualList] = useState([])
  const [semesterList, setSemesterList] = useState([])

  useEffect(() => {
   Axios.get(routes.getsyllabus)
  .then(result => {
    if (result.data) {
      console.log(result.data)
      setSemesterList(result.data.list[0])
      setAnualList(result.data.list[1])
      return result.data.list;
      
    }
    return [];
  }).catch((err) => {
      throw new Error(err);
  })

  }, [])
  
  const handleChange = (e) => {
    setType(e.target.value)
  }
  return (
    <div className={styles.Syllabus}>
      <div className={styles.banner}>
       <span>
       Grid Report for the Curriculum of Courses offered by Kuchaman College, Kuchaman City
       </span> 
      <span> Subjected to the data available on MDSU Syallbus Page</span>
       
      </div>

      <div className={styles.details}>

        <select name="Select Session" id="" defaultValue={"Select Session"} onChange={(e) => { handleChange(e) }}>
          <option value="Annual" >Annual Syllabus</option>
          <option value="Semester" >Semester Syllabus </option>
          {/* <option value="notification" > Syllabus Notification</option> */}
        </select>

        {
        type === "notification" && <div>
          <h1>Syllabus Notification</h1>
          <table>
            <thead>
              <th>S.No</th>
              <th>Name of Course</th>
              <th>Level</th>
              <th>Links / Download syllabus</th>
            </thead>

            <tbody>
              {anualList.map((c, i) => {

                return (<tr key={i}>
                  <td>1</td>
                  <td>Bachelor of Arts (B.A.) – 3 Year (Semester Scheme)</td>
                  <td>U.G.</td>
                  <td>
                    <Link target='_blank'  href={'https://mdsuajmer.ac.in/syllabus/940_BCA%20Pt.I%20(Semester%20I%20&II).pdf'}>– BA BSc BCom General English</Link>
                    <div>– BA BSc. B.Com. General Hindi</div>
                    <div>– BA Pt.I Drawing & Painting (Semester I & II)</div>
                    <div>– BA Pt.I Geography (Semester I & II)</div>
                    <div>– BA Pt.I History (Semester I & II)</div>
                    <div>– BA Pt.I Political Science (Semester I & II)</div>
                    <div>– BA Pt.I Sociology (Semester I & II)</div>
                    <div>– BA Pt-I English Lit. (Semester I&II)</div>
                    <div>– BA Pt-I Hindi Lit. (Semester I&II)</div>
                    <div>– VCA Pt.I (Semester I&II)</div>

                  </td>
                </tr>)
              })
              }
            </tbody>
          </table>
        </div>}

        <div>
       {type === "Annual" ?
        <div>
          <h1>Annual Syllabus</h1>
          <table>
            <thead>
              <th>S.No</th>
              <th>Name of Course</th>
              <th>Level</th>
              <th>Duration</th>
              <th>I Year</th>
              <th>II Year</th>
              <th>III Year</th>
              <th>IV Year</th>
            </thead>

            <tbody>
              {anualList.map((data, i) => {

                return (<tr key={i}>
                   <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.level}</td>
                    <td>{data.duration +" year"}</td>
                    <td>{data?.syllabus?.semesterI ?<Link target='_blank' href={data?.syllabus?.semesterI}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterII ?<Link target='_blank' href={data?.syllabus?.semesterII}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterIII ?<Link target='_blank' href={data?.syllabus?.semesterIII}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterIV ?<Link target='_blank' href={data?.syllabus?.semesterIV}>View</Link>:"N/A"}</td>
                </tr>)
              })
              }
            </tbody>
          </table>
        </div>:
        <div>
          <h1>Semester Syllabus</h1>
          <table>
            <thead>
              <th>S.No</th>
              <th>Name of Course</th>
              <th>Level</th>
              <th>I Semester</th>
              <th>II Semester</th>
              <th>III Semester</th>
              <th>IV Semester</th>
              <th>V Semester</th>
              <th>VI Semester</th>
              <th>VII Semester</th>
              <th>VIII Semester</th>
            </thead>

            <tbody>
              {semesterList.map((data, i) => {

                return (<tr key={i}>
                  <td>{i + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.level}</td>
                    <td>{data?.syllabus?.semesterI ?<Link target='_blank'  href={data?.syllabus?.semesterI}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterII ?<Link target='_blank' href={data?.syllabus?.semesterII}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterIII ?<Link target='_blank' href={data?.syllabus?.semesterIII}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterIV ?<Link target='_blank' href={data?.syllabus?.semesterIV}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterV ?<Link target='_blank' href={data?.syllabus?.semesterV}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterVI ?<Link target='_blank' href={data?.syllabus?.semesterVI}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterVII ?<Link target='_blank' href={data?.syllabus?.semesterVII}>View</Link>:"N/A"}</td>
                    <td>{data?.syllabus?.semesterVIII ?<Link target='_blank' href={data?.syllabus?.semesterVIII}>View</Link>:"N/A"}</td>
                </tr>)
              })
              }
            </tbody>
          </table>
        </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Syllabus