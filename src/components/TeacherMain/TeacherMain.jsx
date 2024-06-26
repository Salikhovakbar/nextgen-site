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
  const [attendanceData, setAttendanceData] = useState()
  const [groupMonth, setGroupMonth] = useState('1')
  const [journalPopUp, setJournalPopUp] = useState(false)
  const[studentJournalId, setStudentJournalId] = useState('')
  const [editAttendanceArr,setEditAttendanceArr] = useState([])
  const [studentId, setStudentId] = useState("")
  const [absenceReason, setAbsenceReason] = useState('')
  const [absenceStatement, setAbsenceStatement] = useState('')
 fetch(`${hosting}/students?teacher_id=${id}`)
.then(response => response.json())
.then(({data}) => setStudentsData(data))
useEffect(() => {
  ;(async () => {
const response = await fetch(`${hosting}/attendance?group_id=${groupId}`)
const { data } = await response.json()
setAttendanceData(data)
})()
}, [groupId])
useEffect(() => {
  ;(async () => {
const response = await fetch(`${hosting}/attendance?group_id=${groupId}`)
const { data } = await response.json()
setAttendanceData(data)
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
  <div style={groupsBoxCount === index ? {background: 'rgb(215, 215, 215)'} : null} onClick={async ()=> {
    setGroupsBoxCount(index)
setGroupId(e._id)
const response = await fetch(`${hosting}/students?group_id=${e._id}&teacher_id=${id}`)
const { data } = await response.json()
setGroupStudentsData(data)
  }} key={e._id}>
    <span style={{fontSize: '20px'}}><HiUserGroup/></span>
    <div>
    <span>GR</span>  <b>{e.group_number}</b>
      <p>{e.time}</p>
    </div>
  </div> : null
  )}
</div>
<div style={journalPopUp ? {display : 'block'} : null} className={c.popup_journal_container}>
  <div>
    <div onClick={() => {
      setJournalPopUp(false)
    }} className={c.journal_shadow_box}></div>
  <div className={c.journal_choose_state_box}>    
  <form onSubmit={async (e) => {
    e.preventDefault()
    const response = await fetch(`${hosting}/absence-reason${localStorage.getItem('absence-reason-id') ? "/" + localStorage.getItem('absence-reason-id'): ''}`,{
      method: localStorage.getItem('absence-reason-id') ? 'PUT' : 'POST',
      body: JSON.stringify({
        reason: absenceReason,
        student_id: studentId,
        attendance_id: studentJournalId,
        date: new Date()
      }),
      headers:{
        token: localStorage.getItem('token'),
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    setJournalPopUp(false)
  }}>
  <select value={absenceStatement} onInput={async  (e) => {
    try{
      setAbsenceStatement(e.target.value)
     if(e.target.value === 'present'){
      setEditAttendanceArr(!editAttendanceArr.includes(studentId) ? editAttendanceArr.push(studentId) : editAttendanceArr)
     if(localStorage.getItem('absence-reason-id')){ 
      const responseAbsenceReason = await fetch(`${hosting}/absence-reason/${localStorage.getItem('absence-reason-id')}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const dataAbsenceReason = await responseAbsenceReason.json()
     setAbsenceReason('')
    }}
    const response = await fetch(`${hosting}/attendance/${studentJournalId}`,{
      method: 'PUT',
      body: JSON.stringify({
        students_id: e.target.value === 'absent' ? editAttendanceArr.filter(a => a !== studentId) : editAttendanceArr
      }),
      headers: {
        token: localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    })
    const responseAttendance =  await fetch(`${hosting}/attendance?group_id=${groupId}`)
    const { data } = await responseAttendance.json()
    setAttendanceData(data)
    }catch(err){
      console.log(err.message)
    }
  }}>
    <option value='absent'>Absent</option>
    <option value='present'>Present</option>
  </select>
  <textarea value={absenceReason} onChange={e => {
    setAbsenceReason(e.target.value)
  }} placeholder='Reasons why the student has not come' cols="30" rows="10"></textarea>
  <div className={c.student_journal_data_btn}>
    <button>Submit</button>
  </div>
  </form>
  </div>
  </div>
</div>
{
    groupStudentsData?.length > 0 ?   
  <div style={{width:'90%', margin: 'auto'}}>
  <select onChange={(e) => {
      setGroupMonth(e.target.value)
    }} className={c.select_month}>
  {
    new Array(10).fill("*").map((e, index) =>
    <option key={index} value={index + 1}>{index + 1}month</option>  
    )
  }
</select>
</div>
 : null}
<table className={c.journal}>
  <tbody>
  {
    groupStudentsData?.length > 0 ?   
     groupStudentsData.map((e, index) => 
    <tr key={e._id}>
      <td className={c.student_name}>
        <div>
      <img src={e.imgLink} alt="" />{ e.lastname + " " + e.firstname }
        </div>
        </td>
      {attendanceData?.length > 0 ?  attendanceData.map(i =>
     i.month === groupMonth ? <td key={i._id}>
      <div>
      <div onClick={() => {
        setJournalPopUp(true)
        setStudentJournalId(i._id)
        setStudentId(e._id)
        setEditAttendanceArr(attendanceData.filter(a => a._id === i._id)[0].students_id)
        setAbsenceStatement((attendanceData.filter(a => a._id === i._id)[0].students_id).includes(e._id) ? 'present' : 'absent')
          ;(async () => {
    const response = await fetch(`${hosting}/absence-reason?attendance_id=${i._id}&student_id=${e._id}`)
    const { data } = await response.json()
    if(data.length > 0){
       setAbsenceReason(data[0].reason)
       localStorage.setItem('absence-reason-id', data[0]._id)
      }
      else{
      setAbsenceReason('')
      localStorage.removeItem('absence-reason-id')
      }
    })()
      }} className={c.journal_circle} style={i.students_id.includes(e._id) ? {background: 'green'} :  {background: 'red'}}>
        {i.students_id.includes(e._id) ? 'P' : 'A'}
      </div>
      </div>
      </td> : null  
      ) : null}
    </tr>

    )
    : null
  }
  </tbody>
</table>
    </div>
  )
}

export default TeacherMain