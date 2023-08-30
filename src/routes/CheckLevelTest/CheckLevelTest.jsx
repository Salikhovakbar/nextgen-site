import CheckLevelTestHeader from '../../components/CheckLevelTestHeader/CheckLevelTestHeader'
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../images/logo-nextgen.png'
const CheckLevelTest = () => {
  const hosting = 'http://localhost:5000'
  const [testData, setTestData] = useState()
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
  if(data.status === 404) throw new Error(data.error)
  else if(data.status === 200){
  setTestData(data.data)
  }
}catch(err){
  alert(err.message)
}
})()
  }, [])
  return (
    <>
    <CheckLevelTestHeader/>
    {pathname === '/check-level-test'? <div style={{width: '100%', height: '90vh'}}><img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={logo} alt="" /></div> : null}
    </>
  )
}

export default CheckLevelTest