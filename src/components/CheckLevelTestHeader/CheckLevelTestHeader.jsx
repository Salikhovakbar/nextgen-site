import { useState } from 'react'
import c from './CheckLevelTestHeader.module.css'
import logo from '../../images/black-logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
const CheckLevelTestHeader = () => {
    const headerLiOptions = {
        sections: [
        'Grammar',
        'Reading',
        'Vocabulary'
    ],
        levels: [
            'Elementary',
            "Pre-intermediate",
            "Intermediate"
        ]
}
    const [sidebarBoxStatement, setSidebarBoxStatement] = useState(false)
    const dispatch = useDispatch()
  return (
    <header className={c.header_check_level}>
<div className={c.header_check_level_box}>
<div className={c.header_logo_box}>
    <img src={logo} alt="logo" />
</div>
<button className={c.header_sidebar_btn} onClick={() => {
    setSidebarBoxStatement(!sidebarBoxStatement)
}}>
    <AiOutlineMenu/>
</button>
</div>
<div style={sidebarBoxStatement ? {top: '0'} : null} className={c.sidebar_box}>
<ul className={c.sidebar_ul_options}>
    {
        headerLiOptions.sections.map((e, index) => 
        <li key={index}>{e}
        <div className={c.sidebar_select_box}>
            {
                headerLiOptions.levels.map((a, i) =>
                <div onClick={() => {
                    dispatch({type: 'LEVEL', data: {level: a.toLowerCase(), section: e.toLowerCase()}})
                }} key={i}><Link to='/check-level-test/choose-level'>{a}</Link></div>
                )
            }
        </div>
        </li>
        )
    }
</ul>
</div>
    </header>
  )
}

export default CheckLevelTestHeader