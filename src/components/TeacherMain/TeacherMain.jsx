import {useState, useEffect} from 'react'
import c from './TeacherMain.module.css'
import { PiStudentFill } from 'react-icons/pi'
import { MdDangerous } from 'react-icons/md'
import { GiBlackBook } from 'react-icons/gi'
import { BiBlock } from 'react-icons/bi'
import { HiUserGroup } from 'react-icons/hi'
const TeacherMain = ({id}) => {
    const hosting = 'http://localhost:5000'
  const [studentsData, setStudentsData] = useState([])
  const [groupDays, setGroupDays] = useState('')
  const [groupsData, setGroupsData] = useState([])
  const [groupId,setGroupId] = useState('')
  const [groupStudentsData, setGroupStudentsData] = useState()
  const [groupsBoxCount, setGroupsBoxCount] = useState()

fetch(`${hosting}/students?teacher_id=${id}`)
.then(response => response.json())
.then(({data}) => setStudentsData(data))

useEffect(() =>{fetch(`${hosting}/groups?day=${groupDays}&teacher_id=${id}`)
.then(response => response.json())
.then(({data})=> {
 setGroupsData(data)
//  setGroupId(data[0]?._id)
})}, [groupDays])
useEffect(() => {
;(async () => {
const response = await fetch(`${hosting}/students?group_id=${groupId}&teacher_id=${id}`)
const { data } = await response.json()
setGroupStudentsData(data)
})()
}, [groupId])
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
<div className={c.groups_day_box}>
  <div>
    <div style={groupDays === 'odd' ? {color: 'white', background: 'black'} : null} onClick={async() => {
      if(groupDays !== 'odd'){
        setGroupDays('odd')
      setGroupStudentsData([])
      setGroupsBoxCount('')

    }
      const response = await fetch(`${hosting}/groups?day=odd&teacher_id=${id}`)
      const { data } = await response.json()
      setGroupsData(data)
    }}>Odd days</div>
    <div style={groupDays === 'even' ? {color: 'white', background: 'black'} : null} onClick={async() => {
      if(groupDays !== 'even'){
        setGroupDays('even')
      setGroupStudentsData([])
      setGroupsBoxCount('')
    }
      const response = await fetch(`${hosting}/groups?day=even&teacher_id=${id}`)
      const { data } = await response.json()
      setGroupsData(data)
    }}>Even days</div>
  </div>
</div>
<div className={c.groups_box}>
  {groupsData.map((e, index) => 
  e.day === groupDays ?
  <div style={groupsBoxCount === index ? {background: 'rgb(215, 215, 215)'} : null} onClick={()=> {
    setGroupsBoxCount(index)
setGroupId(e._id)
  }} key={e._id}>
    <span style={{fontSize: '20px'}}><HiUserGroup/></span>
    <div>
    <span>GR</span>  <b>{e.group_number}</b>
      <p>{e.time}</p>
    </div>
  </div> : null
  )}
</div>
<div className={c.journal}>
  {
    groupStudentsData?.length > 0 ?   
    groupStudentsData.map((e, index) => 
    <div key={e._id}>
      {e.firstname}
    </div>
    )
    : null
  }
</div>
    </div>
  )
}

export default TeacherMain