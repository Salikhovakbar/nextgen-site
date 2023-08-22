import {useState, useEffect} from 'react'
import c from './TeacherMain.module.css'
import { PiStudentFill } from 'react-icons/pi'
import { MdDangerous } from 'react-icons/md'
import { GiBlackBook } from 'react-icons/gi'
import { BiBlock } from 'react-icons/bi'
const TeacherMain = ({id}) => {
    const hosting = 'http://localhost:5000'
  const [studentsData, setStudentsData] = useState([])
  useEffect(() => {
;(async () => {
const responseStudents = await fetch(`${hosting}/students?teacher_id=${id}`)
const dataStudents = await responseStudents.json()
setStudentsData(dataStudents.data)
})()
  }, [])
  const studentsProductivityData = [
    {
      text: 'Active Students',
      icon:<PiStudentFill/>,
      color: 'green',
      number: studentsData.filter(e => e.paid === true).length || 0
    },
    {
      text: 'Lost',
      color: 'red',
      icon:  <MdDangerous/>,
      number: studentsData.filter(e => e.active === false).length || 0
    },
    {
      text: 'Red List',
      color: 'red',
      icon: <BiBlock/>,
      number: 0
    },
    {
        text: 'Black List',
        color: 'black',
        icon: <GiBlackBook/>,
        number: studentsData.filter(e => e.paid === false && e.active=== true).length || 0
      }
  ]

    return (
    <div>
<div className={c.students_info_productivity_box}>
{
    studentsProductivityData.map((e, index) => 
    <div className={c.students_info_box} key={index}>
        <div>
        <span className={c.students_info_icon} style={{color: e.color}}>{e.icon}</span>
        </div>
        <div className={c.students_info_text_box}>
            <b>{e.text}</b>
            <p>{e.number}</p>
        </div>
    </div>    )
}
</div>
    </div>
  )
}

export default TeacherMain