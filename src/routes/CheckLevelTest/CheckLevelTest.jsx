import CheckLevelTestHeader from '../../components/CheckLevelTestHeader/CheckLevelTestHeader'
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../images/logo-nextgen.png'
import ChooseLevelTest from '../../components/ChooseLevelTest/ChooseLevelTest'
const CheckLevelTest = () => {
  const hosting = 'http://localhost:5000'
  const { pathname } = useLocation()
  useEffect(() => {
;(async () => {
try{
  const response = await fetch(`${hosting}/test`,{
    method: 'GET',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  const data = await response.json()
  if(data.status === 404){
  window.location = '/'
  }
}catch(err){
  alert(err.message)
}
})()
  }, [])
  return (
    <>
    {pathname === '/check-level-test' ?<CheckLevelTestHeader/> : null}
    {pathname === '/check-level-test'? <div style={{width: '100%', height: '90vh'}}><img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={logo} alt="" /></div> : null}
    {pathname === '/check-level-test/choose-level' ? <ChooseLevelTest hosting={hosting}/> : null}
    </>
  )
}

export default CheckLevelTest