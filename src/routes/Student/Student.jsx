import { useState, useEffect } from "react"
const Student = () => {
    const [userId, setUserId] = useState('')
    useEffect(() => {
(async() => {
const response = await fetch('http://localhost:5000/check-token', {
    method: 'GET',
    headers: {
        token: localStorage.getItem('token')
    }
})
const data = await response.json()
if(data.status === 404) window.location = '/login/students-login'
else if(!(data.route.includes('/student-cabinet'))) window.location = '/login/teachers-login'
})()
    }, [])
    return (
    <div>Student</div>
  )
}

export default Student