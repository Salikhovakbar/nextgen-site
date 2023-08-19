import './Header.css'
import logo from '../../images/logo-nextgen.png'
import { Link, useLocation } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose, AiOutlineGlobal } from 'react-icons/ai'
import { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch()
  const [sidebar, setSidebar] = useState(false)
  const [countLanguage,setCountLanguage] = useState(localStorage.getItem('lan_index') || 0)
  const languages = ['Русский', "O'zbekcha"]
  const { pathname } = useLocation()
  const headerLiLanguages = [
    {
language: 'русский',
headerLiOptions: [
  {link: "#about",
  text:"О школе"
},
  {
    link: "#team",
    text:"Команда"
  },
  {
    link: "#price",
    text:"Цены"
  },
  {
    link: "#galery",
    text: "Галерея"
  },
  {
    link: "#public",
    text: "Публичная оферта"
  },
  {
    link: "#vacancy",
    text: "Вакансии"
  }
    ]
    },
    {
      language: "o'zbekcha",
      headerLiOptions: [
        {link: "#about",
        text:"Maktab haqida"
      },
        {
          link: "#team",
          text:"Jamoa"
        },
        {
          link: "#price",
          text:"Narxlar"
        },
        {
          link: "#galery",
          text: "Galereya"
        },
        {
          link: "#public",
          text: "Ommaviy taklif"
        },
        {
          link: "#vacancy",
          text: "Bo'sh ish o'rinlari"
        }
          ]
    }
  ]
dispatch({type: 'LANGUAGE', data: languages[countLanguage]})
  let headerLiOptions = []
  if(languages[countLanguage].toLowerCase() === 'русский'){
    headerLiOptions = headerLiLanguages.find(e => e.language.toLowerCase() === 'русский').headerLiOptions
  }
  else if(languages[countLanguage].toLowerCase() === "o'zbekcha"){
    headerLiOptions = headerLiLanguages.find(e => e.language.toLowerCase() === "o'zbekcha").headerLiOptions
  }
useEffect(()=> {
dispatch({type: 'LANGUAGE', data: languages[countLanguage]})
}, [countLanguage])
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
          {headerLiOptions.map((e, index) => 
        <li key={index} className='sidebar-li-option'><a href={e.link}>{e.text}</a></li>
          )}
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
      {headerLiOptions.map((e, index) => 
        <li key={index} className='header-li-option'><a href={e.link}>{e.text}</a></li>
          )}
      </ul>
      <div className='header-contact-box'>
        <div className="header-contact-icons">
         <Link to='/login/students-login'><i><FaUserAlt/></i></Link> <a className='header-phone-icon' href='tel:+998907888875'><i><BsFillTelephoneFill/></i></a> <div className='select-languages-box'><AiOutlineGlobal/>{languages[countLanguage]} <div className='languages-option-box'>
          {languages.map((e,index) => 
          <div onClick={() => {
            localStorage.setItem('lan_index', index)
            setCountLanguage(index)
          }} style={Number(countLanguage) === index? {display: 'none'}: null} key={index}>
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