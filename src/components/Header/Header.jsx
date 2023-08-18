import './Header.css'
import logo from '../../images/logo-nextgen.png'
import { Link, useLocation } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose, AiOutlineGlobal } from 'react-icons/ai'
import { useState } from 'react'
const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const [countLanguage,setCountLanguage] = useState(0)
  const languages = ['Русский', 'Uzbek']
  const { pathname } = useLocation()
  if(pathname.includes("/registration")) return
  return (
    <header>
      <div style={sidebar ? {display: 'block'} : {display: 'none'}} onClick={() => {
        setSidebar(false)
      }} className='shadow-box'></div>
      <div style={sidebar ? {left: 0} : {left: '-100%'}} className='side-bar-box'>
        <div className='btn-remove-sidebar-box'>
          <i onClick={() => {
            setSidebar(false)
          }}><AiOutlineClose/></i>
        </div>
        <ul className='sidebar-ul'>
        <li className='sidebar-li-option'><a href='#about'>О школе</a></li>
        <li className='sidebar-li-option'><a href='#team'>Команда</a></li>
        <li className='sidebar-li-option'><a href='#price'>Цены</a></li>
        <li className='sidebar-li-option'><a href='#galery'>Галерея</a></li>
        <li className='sidebar-li-option'><a href='#public'>Публичная офёрта</a></li>
        <li className='sidebar-li-option'><a href='#vacancy'>Вакансии</a></li>
        </ul>
      </div>
    <div className='header-box'>
      <div className='side-btn-box'>
        <button onClick={() => {
          setSidebar(true)
        }}>
        <AiOutlineMenu/>
        </button>
      </div>
    <div className='header-logo'>
        <img src={logo} alt="" />
      </div>
      <ul className='header-ul-options'>
        <li className='header-li-option'><a href='#about'>О школе</a></li>
        <li className='header-li-option'><a href='#team'>Команда</a></li>
        <li className='header-li-option'><a href='#price'>Цены</a></li>
        <li className='header-li-option'><a href='#galery'>Галерея</a></li>
        <li className='header-li-option'><a href='#public'>Публичная офёрта</a></li>
        <li className='header-li-option'><a href='#vacancy'>Вакансии</a></li>
      </ul>
      <div className='header-contact-box'>
        <div className="header-contact-icons">
         <Link to='/login/students-login'><i><FaUserAlt/></i></Link> <a className='header-phone-icon' href='tel:+998907888875'><i><BsFillTelephoneFill/></i></a> <div className='select-languages-box'><AiOutlineGlobal/>{languages[countLanguage]} <div className='languages-option-box'>
          {languages.map((e,index) => 
          <div onClick={() => {
            setCountLanguage(index)
          }} style={countLanguage === index? {display: 'none'}: null} key={index}>
          <span>{e}</span>
          </div>  
          )}
          </div></div>
        </div>
        <div className='header-phone-number-box'>
        <b>+998907888875</b>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header