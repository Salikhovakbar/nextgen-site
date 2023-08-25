import {useState, useEffect, useRef} from 'react'
import logo from '../../images/black-logo.png'
import c from './TeacherPage.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { FaHome, FaTasks } from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'
import { TfiCup } from 'react-icons/tfi'
import { AiOutlineFileDone, AiFillWechat } from 'react-icons/ai'
import { BsBook, BsThreeDotsVertical, BsPencilFill } from 'react-icons/bs'
import { FcStatistics } from 'react-icons/fc'
import { BiSolidBellRing, BiError, BiLogOut} from 'react-icons/bi'
import { GrFlag } from 'react-icons/gr'
import { FaRegWindowClose } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import TeacherMain from '../TeacherMain/TeacherMain'
const TeacherHeader = ({userInfo}) => {
  const { _id, firstname, lastname, imgLink } = userInfo
  const { route } = useParams()
  const [iconType, setIconType] = useState('')
  const [shadowStatement, setShadowStatement] = useState(false)
  const [profileChangeBox, setProfileChangeBox] = useState(false)
  const [newPassword,setNewPassword] = useState('')
  const inputFile = useRef()
  const hosting = 'http://localhost:5000'
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
  <span className={c.btn_change_profile} onClick={() => {
   
  }}><BsThreeDotsVertical/>
  <div className={c.profile_settings_box}>
    <div className={c.figure_settings}></div>
  <div className={c.profile_settings}>
    <div onClick={() => {
setProfileChangeBox(true)
    }}>
      <div>
        <span><BsPencilFill/></span>
        <span className={c.profile_settings_text}>Change profile</span></div>
    </div>
    <div onClick={() => {
      localStorage.removeItem('token')
    window.location = '/login/teachers-login'  
    }}>
      <div>
      <span className={c.logout_icon}><BiLogOut/></span>
        <span className={c.profile_settings_text}>Log out</span></div>
    </div>
  </div>
  </div></span>
</div>
</div>
</div>
<div style={iconType === 'sidebar' ? {right: 0} : {right: '-100%'}} className={c.sidebar_teacher_box}></div>
</header>
<div onClick={() => {
  setShadowStatement(false)
  setIconType('')
}} style={shadowStatement ? {display: 'block'} : null} className={c.shadow}></div>
<div style={profileChangeBox ? {display: 'flex'} : null} className={c.profile_change_container}>
  <div onClick={() => {
    setProfileChangeBox(false)
  }} className={c.profile_shadow}></div>
  <div className={c.change_profile_box}>
    <span onClick={() => {
    setProfileChangeBox(false)
    }}><FaRegWindowClose/></span>
    <form onSubmit={async (e) => {
      try{
        e.preventDefault()
        const formData = new FormData()
      if(inputFile.current.files.length > 0 || newPassword.length > 0){
      if(inputFile.current.files.length > 0) formData.append('avatar', inputFile.current.files[inputFile.current.files.length - 1])
      if(newPassword.length > 0) formData.append('password', newPassword)
    const response = await fetch(`${hosting}/teachers`,{
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'application/json charset=UTF-8'
      }
    })
    const data = await response.json()
    console.log(data)
    if(data.status === 404) alert(data.error) 
    else if(data.status === 200) return
    }
else throw new Error('Please make changes')
      }catch(err){
        alert(err.message)
      }
    }}>
      <div className={c.img_edit_profile_box}>
        <div className={c.img_edit_box}>
          <img src={imgLink} alt="" />
      <div className={c.profile_edit_label}><label htmlFor="profile_img_input"><MdAddAPhoto/></label></div>   
          <input ref={inputFile}  id='profile_img_input' className={c.input_file_profile_avatar} type="file" />
        </div>
        <input onInput={e => {
          setNewPassword(e.target.value)
        }} className={c.profile_password_edit} placeholder='Write your new password (If you want to change it)' type="text" />
      </div>
      <button className={c.btn_submit_change_profile}>Submit</button>
    </form>
  </div>
</div>
{route === 'home' ?<TeacherMain id={_id}/> : null}
</div>
    </div>
  )
}

export default TeacherHeader