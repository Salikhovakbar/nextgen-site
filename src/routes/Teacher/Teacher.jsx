import { useState, useEffect } from 'react'
import TeacherHeader from '../../components/TeacherPage/TeacherPage'
const Teacher = () => {
  const hosting = 'http://localhost:5000'
  const [user, setUser] = useState('')
    useEffect(() => {
(async() => {
const response = await fetch(`${hosting}/check-token`, {
    method: 'GET',
    headers: {
        token: localStorage.getItem('token')
    }
})
const data = await response.json()
if(data.status === 404) window.location = '/login/teachers-login'
else if(!(data.route.includes('/teacher-cabinet'))) window.location = '/login/students-login'
else {
  fetch(`${hosting}/teachers/${data.id}`).then(res => res.json()).then(info => setUser(info.data))  
}})()
    }, [])
  return (
    <>
<TeacherHeader userInfo={user}/>
    </>
  )
}

export default Teacher