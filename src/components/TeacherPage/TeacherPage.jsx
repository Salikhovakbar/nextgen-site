import {useState, useEffect} from 'react'
import logo from '../../images/black-logo.png'
import c from './TeacherPage.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { FaHome, FaTasks } from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'
import { TfiCup } from 'react-icons/tfi'
import { AiOutlineFileDone, AiFillWechat } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FcStatistics } from 'react-icons/fc'
import { BiSolidBellRing, BiError } from 'react-icons/bi'
import { GrFlag } from 'react-icons/gr'
import TeacherMain from '../TeacherMain/TeacherMain'
const TeacherHeader = ({userInfo}) => {
  const { _id, firstname, lastname, imgLink } = userInfo
  const { route } = useParams()
  const [iconType, setIconType] = useState('')
  const [shadowStatement, setShadowStatement] = useState(false)
  const [studentsData, setStudentsData] = useState([])
  const mainIcons = [
    {text: 'Home',
      route: '/teacher-cabinet/home',
      icon : <FaHome/>
    },
    {text: 'Lesson',
      route: '/teacher-cabinet/lessons',
      icon: <RiGraduationCapFill/>},
    {text: 'Ranking',
      route: '/teacher-cabinet/ranking',
      icon:<TfiCup/>},
    {text: 'Statistics',
      route: '/teacher-cabinet/statistics',
      icon: <FcStatistics/>},
    {text: 'Exams',
      route: '/teacher-cabinet/exams',
      icon:<AiOutlineFileDone/>},
    {text: 'Library',
      route: '/teacher-cabinet/library',
      icon:<BsBook/>},
    {text: 'Tasks',
      route: '/teacher-cabinet/tasks',
      icon:<FaTasks/>}
  ] 
  const headerIcons = [
    {text: 'complaint',
      icon: <GrFlag/>},
    {text: 'sidebar',
     icon: <BiError/>},
    {text: 'sidebar',
    icon :<BiSolidBellRing/>},
    {text: 'sidebar',
      icon:<AiFillWechat/>}
  ]
  return (
    <div className={c.teacherHeader}>
      <div>
      <div className={c.logo_box}>
        <img src={logo} alt="" />  
         </div>
      <div className={c.main_box_icons}>
{
  mainIcons.map((e, index) => 
    <div key={index} className={c.main_icon_box}>
      <NavLink to={e.route} className={c.main_icon_link} activeClassName={c.active_icon_style}>
<span>{e.icon}</span>
<span className='main_icon_heading'>{e.text}</span>
  </NavLink>
    </div>
  )
}
      </div>
</div>
<div>
<header className={c.header_teacher_cabinet}>
<div className={c.header_box}>
<p className={c.router_name}>
  {route.charAt(0).toUpperCase() + route.slice(1)}
</p>
<div style={{display: 'flex', alignItems: 'center', width: '80%', justifyContent: 'flex-end'}}>
<div className={c.header_control_icons_box}>
  {headerIcons.map((e, index) => 
    <div onClick={() => {
      setIconType(e.text)
      setShadowStatement(true)
    }} className={c.header_icon_box} key={index}>
      <span>{e.icon}</span>
    </div>
  )}
</div>
<div className={c.profile_box}>
  <div className={c.avatar_img_box}>
    <img className={c.user_profile_avatar} src={imgLink} alt="" />
  </div>
  <span className={c.profile_username}>{firstname}</span>
</div>
</div>
</div>
<div style={iconType === 'sidebar' ? {right: 0} : {right: '-100%'}} className={c.sidebar_teacher_box}></div>
</header>
<div onClick={() => {
  setShadowStatement(false)
  setIconType('')
}} style={shadowStatement ? {display: 'block'} : {display: 'none'}} className={c.shadow}></div>
{route === 'home' ?<TeacherMain id={_id}/> : null}
</div>
    </div>
  )
}

export default TeacherHeader