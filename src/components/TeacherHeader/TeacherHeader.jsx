import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
const TeacherHeader = () => {
    const userId = useSelector(({id}) => id)
  return (
    <div>TeacherHeader</div>
  )
}

export default TeacherHeader