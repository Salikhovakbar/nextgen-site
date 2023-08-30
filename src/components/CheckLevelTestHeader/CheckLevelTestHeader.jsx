import { useState } from 'react'
import c from './CheckLevelTestHeader.module.css'
import logo from '../../images/black-logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
const CheckLevelTestHeader = () => {
    const headerLiOptions = [
        'Grammar',
        'Reading'
    ]
    const [sidebarBoxStatement, setSidebarBoxStatement] = useState(false)
  return (
    <header className={c.header_check_level}>
<div className={c.header_logo_box}>
    <img src={logo} alt="logo" />
</div>
<button className={c.header_sidebar_btn} onClick={() => {
    setSidebarBoxStatement(true)
}}>
    <AiOutlineMenu/>
</button>
<div style={sidebarBoxStatement ? {top: '0'} : null} className={c.sidebar_box}>

</div>
    </header>
  )
}

export default CheckLevelTestHeader