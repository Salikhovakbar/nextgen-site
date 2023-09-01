import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import c from './ChooseLevelTest.module.css'
const ChooseLevelTest = ({hosting}) => {
    const [testData, setTestData] = useState()
    const [levelTest,setLevelTest] = useState('')
    const levelInfo = useSelector(({testLevel}) => testLevel).level
    let { level, section } = levelInfo
    if(level)localStorage.setItem('level', level)
    if(section)localStorage.setItem('section', section)
    level = localStorage.getItem('level')
    section = localStorage.getItem('section') 
    const dispatch = useDispatch()
    useEffect(() => {
        ;(async () => {
        try{
          const response = await fetch(`${hosting}/test?level=${level}&stage_level=${levelTest}&section=${section}`,{
            method: 'GET',
            headers: {
              token: localStorage.getItem('token')
            }
          })
          const data = await response.json()
          if(data.status === 404) throw new Error(data.error)
          else if(data.status === 200){
            setTestData(data.data)
            dispatch({type: 'TEST', data: testData})
          }
        }catch(err){
          alert(err.message)
        }
        })()
          }, [levelTest])
  return (
    <div className={c.choose_level_box}>
        <Link to='/check-level-test/exam' className={c.level_define_box}>
        <div onClick={() => {
          setLevelTest(level + ' start')
        }} className={c.stage_level_box}>{`${level} start`}</div>
        </Link>
        <Link to='/check-level-test/exam' className={c.level_define_box}>
        <div onClick={() => {
          setLevelTest(level +' final')
        }} className={c.stage_level_box}>{`${level} final`}</div>
        </Link>
    </div>
  )
}

export default ChooseLevelTest