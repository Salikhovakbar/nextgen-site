import { useState, useEffect } from 'react'
import TeacherHeader from '../../components/TeacherHeader/TeacherHeader'
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
else {
  fetch(`${hosting}/teachers/${data.id}`).then(res => res.json()).then(info => setUser(info.data))
console.log(user)    
}})()
    }, [])
  return (
    <>
<TeacherHeader userInfo={user}/>
    </>
  )
}

export default Teacher