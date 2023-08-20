import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
const Teacher = () => {
const dispatch = useDispatch()
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
if(data.status === 404) window.location = '/login/teachers-login'
setUserId(data.id)
dispatch({
  type: 'TOKEN_ID',
  data: userId
})
})()
    }, [])
  return (
    <div></div>
  )
}

export default Teacher