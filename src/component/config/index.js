import axios from "axios";

const API=process.env.SERVER?process.env.SERVER:"http://localhost:4000/api";

const Axios=axios.create({
    baseURL:API,
    headers:{
        "Content-Type":'application/json',
        "Access-Control-Allow-Origin":"*"
    }
})

const routes={


       //course

       getcourse:`${API}/course/list`,
       getcourseById:`${API}/course/getcourseById`,
       getCourseId:`${API}/course/getCourseId`,

       //syllabus

       getsyllabus:`${API}/syllabus/list`,
       getsyllabusById:`${API}/syllabus/getsyllabusById`,
       getsyllabusId:`${API}/syllabus/getSyllabusId`,

       //departments

       getdepartment:`${API}/department/list`,
       getdepartmentById:`${API}/department/getdepartmentById`,
       getdepartmentId:`${API}/department/getdepartmentId`,
       getdepartmentName:`${API}/department/getdepartmentByName`,

       //college

       getCollege:`${API}/college/list`,
       getMember:`${API}/member/list`,

       //college

       getContact:`${API}/contact/list`,


}

export{Axios,routes,API};
