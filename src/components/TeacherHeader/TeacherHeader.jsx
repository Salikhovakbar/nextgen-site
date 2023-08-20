import {useState, useEffect} from 'react'
import logo from '../../images/black-logo.png'
import c from './TeacherHeader.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { FaHome, FaTasks } from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'
import { TfiCup } from 'react-icons/tfi'
import { AiOutlineFileDone } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FcStatistics } from 'react-icons/fc'
const TeacherHeader = ({userInfo}) => {
  const { _id, firstname, lastname, imgLink } = userInfo
  const { route } = useParams()
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
<header className={c.header_teacher_cabinet} style={route.toLowerCase() === 'home' ? {background: 'rgb(0, 103, 207)'} : {background: 'white'}}>
<div>
<p className={c.router_name}>
  {route.charAt(0).toUpperCase() + route.slice(1)}
</p>
<div className={c.header_control_icons_box}></div>
<div className={c.profile_box}>
  <div className={c.avatar_img_box}>
    <img className={c.user_profile_avatar} src={imgLink} alt="" />
  </div>
  <span className={c.profile_username}>{firstname}</span>
</div>
</div>
</header>
</div>
    </div>
  )
}

export default TeacherHeader