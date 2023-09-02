import {useEffect, useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainBody from '../../components/Main/Main.jsx'
const Main = () => {
  const hosting = 'http://localhost:5000'
  const [adminStatement, setAdminStatement] = useState(false)
  useEffect(() => {
    ;(async () => {
      const response = await fetch(`${hosting}/check-admin-token`,{
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      const data = await response.json()
      if(data.status === 200) setAdminStatement(true)
    })()
  }, [])
  return (
    <>
    <Header/>
    <MainBody adminConfirmation={adminStatement} hosting={hosting}/>
    <Footer/>
    </>
  )
}

export default Main