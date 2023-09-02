import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import c from './ChooseLevelTest.module.css'
const ChooseLevelTest = ({hosting}) => {
    const levelInfo = useSelector(({testLevel}) => testLevel).level
    let { level, section } = levelInfo
    if(level)localStorage.setItem('level', level)
    if(section)localStorage.setItem('section', section)
    level = localStorage.getItem('level')
    const dispatch = useDispatch()
  return (
    <div className={c.choose_level_box}>
        <Link onClick={ () => {
            ;( async () => {
            try{
          const response = await fetch(`${hosting}/test?level=${level}&stage_level=${level + ' start'}`,{
            method: 'GET',
            headers: {
              token: localStorage.getItem('token')
            }
          })
          const data = await response.json()
          if(data.status === 404) throw new Error(data.error)
          else if(data.status === 200){
            dispatch({type: 'TEST', data: data.data[0]})
          }
        }catch(err){
          alert(err.message)
        }
        })()
        }} to='/check-level-test/exam' className={c.level_define_box}>
        <div className={c.stage_level_box}>{`${level} start`}</div>
        </Link>
        <Link onClick={() => {
          ;( async () => {
            try{
          const response = await fetch(`${hosting}/test?level=${level}&stage_level=${level + ' final'}`,{
            method: 'GET',
            headers: {
              token: localStorage.getItem('token')
            }
          })
          const data = await response.json()
          if(data.status === 404) throw new Error(data.error)
          else if(data.status === 200 && data.data.length > 0){
            dispatch({type: 'TEST', data: data.data})
          }
        }catch(err){
          alert(err.message)
        }
        })()
        }} to='/check-level-test/exam' className={c.level_define_box}>
        <div className={c.stage_level_box}>{`${level} final`}</div>
        </Link>
    </div>
  )
}

export default ChooseLevelTest