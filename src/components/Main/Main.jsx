import './Main.css'
import { useState, useEffect, useRef } from 'react'
import {BiLogoTelegram, BiSolidPhoneCall} from 'react-icons/bi'
import { FaTiktok, FaYoutube, FaWindowClose } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { BsInstagram, BsCalendarFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { MdCastForEducation, MdMobileFriendly } from 'react-icons/md'
import { AiFillBook } from'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ImLocation2 } from 'react-icons/im'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import genEn from '../../images/general-english.jpg'
import ieltsLogo from '../../images/IELTS.png'
const Main = () => {
    const [firstname,setFirstname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [mediaCount, setMediaCount] = useState('')
const [registerForm, setRegisterForm] = useState(false)
const [teachersInfo, setTeachersInfo] = useState('')
const conditionCarouselEl = useRef()
const [conditionPage, setConditionPage] = useState(0)
const conditions =[
    {
        type: 'general english',
        condition: [
            'Группа 13 (±1) Учеников',
            'Наш App и 1 книга (book)',
            'Фирменная Тетрадь Grammar и Vocabulary',
            'Сервис Academic Support',
            'Speaking Club',
            'standard group (550.000)',
            "individual (1.650.000)so'm"
        ]
    },{
        type: 'ielts',
        condition: [
            'Группа 13 (±1) Учеников',
            'Сервис Academic Support',
            'Speaking Club',
            "standard group 650.000 so'm",
            "individual (2.000.000)so'm"
        ]
    }
]
const mediaApps = [
    {
        media: 'Telegram',
        icon: <BiLogoTelegram/>,
        link: ""
    },
    {
        media: 'Instagram',
        icon: <BsInstagram/>,
        link: ""
    },
    {
        media: 'Facebook',
        icon: <GrFacebook/>,
        link: ""
    },
    {
        media: 'YouTube',
        icon: <FaYoutube/>,
        link: ""
    },
    {
        media: 'Tik-Tok',
        icon: <FaTiktok/>,
        link: ""
    }
];
const whyToChooseUs = [
    {
icon: <GiTeacher/>,
title: 'Учителя',
supportingSentence: 'Вам будут помогать учителя(main teacher, teaching assistant, speaking assistant)'
},
{
icon: <BsCalendarFill/>,
title: 'Ежедневная посещение',
supportingSentence: 'Кроме уроков, вы сможете посещать Co-working zone'
},
{
icon: <MdCastForEducation/>,
title: 'Britain education system (Pearson education)',
supportingSentence: 'Наше обучение основано на системе Oxford University Press'
},
{
icon: <AiFillBook/>,
title: 'Бесплатные фирменные книги (Высокого качества)',
supportingSentence: 'NEXTGEN обеспечивает своих учеников с бесплатными качественными книгами'
},
{
icon: <MdMobileFriendly/>,
title: 'Mobile app',
supportingSentence: 'Возможность делать задания в нашем приложение'
},
{
icon: <HiUserGroup/>,
title: 'Co-working zone',
supportingSentence: 'Также, шанс посещать co-working zone, где вы сможете присоединится своим однокурсникам'
}
]
const hosting = 'http://localhost:5000';
useEffect( () => {
   fetch(hosting + '/teachers-data')
  .then(response => response.json())
  .then(data => setTeachersInfo(data.data))
}, [])
useEffect(() => {
conditionCarouselEl.current.scrollLeft = conditionPage * conditionCarouselEl.current.offsetWidth
}, [conditionPage])
    return (
    <div>
        <div className="main-container">
            <div className='register-box'>
                <div className='application-box'>
<div>
<h2>Записаться на первый урок!</h2>
<p>Оставьте заявку и наш менеджер Свяжется с вами.</p>
</div>
                    <form onSubmit={async(e) => {
                        e.preventDefault()
                       if(firstname.length > 0 && telephone.length > 8){ const response = await fetch('http://localhost:5000/new/students',{
                            method: "POST",
                            body: JSON.stringify({
                                firstname,
                                telephone
                            }),
                            headers: {
                                'Content-Type': "application/json; charset=UTF-8"
                            }
                        })
                        const data = await response.json()
                        if(data.status === 200){
                            alert(data.data)
                        }}
                    }}>
                        <input value={firstname} onInput={(e) => {
                            setFirstname(e.target.value)
                        }} type="text" placeholder='Ваше имя'/>
                        <input value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
                        setTelephone(e.target.value)
                        }} type="text" placeholder='Ваше телефон'/>
                    <button style={firstname.length > 0 && telephone.length > 8 ? {background: 'black', color: "white"}: {background: "rgb(222, 222, 222)"}} disabled className='btn-submit-application'>Записаться</button>
                    </form>
                </div>
            </div>
            <div className="main-btn-box">
            <button onClick={() => {
setRegisterForm(true)
            }} className='main-btn'>Записаться</button>
            </div>
            <div className='social-network-apps-box'>
{
    mediaApps.map((e, index) => 
    <div key={index}
    style={mediaCount === index ? {marginLeft: 0}: {marginLeft: '70%'}}
    onMouseLeave={() => {
        setMediaCount('')
    }}
    onMouseEnter={() => {
        setMediaCount(index)
    }}><span className='app-icon'>{e.icon}</span> <span className='app-name'><a href={e.link}>{e.media}</a></span></div>
    )
}
            </div>
            <div className="call-box"><a href="tel:+998787777707"><BiSolidPhoneCall/></a></div>
        </div>
                    <div style={registerForm? {display: 'flex'} : {display: 'none'}} className='registration-application-container'>
                    <div onClick={() => {
            setRegisterForm(false)
        }}  className="shadow"></div>
                    <div>
                        <div className="application-box-top">
                            <p>Мы свяжемся с вами в ближайшее время</p><i onClick={() => {
                                setRegisterForm(false)
                            }}><FaWindowClose/></i>
                        </div>
                        <form className='form-register-popup' onSubmit={async(e) => {
                        e.preventDefault()
                       if(firstname.length > 0 && telephone.length > 8){ const response = await fetch('http://localhost:5000/new/students',{
                            method: "POST",
                            body: JSON.stringify({
                                firstname,
                                telephone
                            }),
                            headers: {
                                'Content-Type': "application/json; charset=UTF-8"
                            }
                        })
                        const data = await response.json()
                        if(data.status === 200){
                            alert(data.data)
                        }}
                    }}>
                        <input value={firstname} onInput={(e) => {
                            setFirstname(e.target.value)
                        }} type="text" placeholder='Ваше имя'/>
                        <input value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
                        setTelephone(e.target.value)
                        }} type="text" placeholder='Ваше телефон'/>
                    <button style={firstname.length > 0 && telephone.length > 8 ? {background: 'black', color: "white"}: {background: "rgb(222, 222, 222)"}} disabled className='btn-submit-application'>Записаться</button>
                    </form>
                    </div>
                    </div>
                    <h2 id='about'>О НАШЕМ УЧЕБНОМ ЦЕНТРЕ АНГЛИЙСКОГО ЯЗЫКА</h2>
                    <div className="about-box">
{
    whyToChooseUs.map((e,index) => 
    <div key={index}>
        <div className="icon-aboutus-box">
            <i>{e.icon}</i>
        </div>
        <div><h3>{e.title}</h3></div>
        <div><p>{e.supportingSentence}</p></div>
    </div>
    )
}
                    </div>
                    <h2 id="team">НАШИ УЧИТЕЛЯ</h2>
                    <div className='swiper-computer'>
                    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >

      {teachersInfo.length > 0 ? teachersInfo.map((e, index) => 
          <SwiperSlide key={e._id} className='slide'>
        <div key={e._id} className='carousel-slide-box'>
            <div className='teacher-img-box'>
                <img src={e.imgLink} alt="" />
            </div>
            <div className='teacher-name-box'>
            <span className='span-decoration-border'></span>    <span>{e.teacher_name}</span>
            </div>
        </div>
    </SwiperSlide>
      ) : null}
    </Swiper>
    </div>
    <div className='swiper-tablet'>
    <Swiper 
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >

      {teachersInfo.length > 0 ? teachersInfo.map((e, index) => 
          <SwiperSlide key={e._id} className='slide'>
        <div className='carousel-slide-box'>
            <div className='teacher-img-box'>
                <img src={e.imgLink} alt="" />
            </div>
            <div className='teacher-name-box'>
            <span className='span-decoration-border'></span>    <span>{e.teacher_name}</span>
            </div>
        </div>
    </SwiperSlide>
      ) : null}
    </Swiper>
    </div>
    <div className='swiper-phone'>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >

      {teachersInfo.length > 0 ? teachersInfo.map((e, index) => 
          <SwiperSlide key={e._id} className='slide'>
        <div className='carousel-slide-box'>
            <div className='teacher-img-box'>
                <img src={e.imgLink} alt="" />
            </div>
            <div className='teacher-name-box'>
            <span className='span-decoration-border'></span>    <span>{e.teacher_name}</span>
            </div>
        </div>
    </SwiperSlide>
      ) : null}
    </Swiper>
    </div>
    <h2 id='price'>ЦЕНЫ</h2>
    <div className="price-data-box">
        <div className="price-group-choices">
            <div className="choices-box">
                <div onClick={() => {
setConditionPage(0)
                }}><span>General English</span></div>
                <div onClick={() => {
                    setConditionPage(1)
                }}><span>IELTS</span></div>
            </div>
        </div>
        <div ref={conditionCarouselEl} className="main-slide-box">
            <div>
                <ul className='condition-ul'>
                {
                    conditions[0].condition.map((e, index) => 
                     <li key={index}>{e}</li>   
                    )
                }
                </ul>
                <div className='picture-condition-box'>
                    <img src={genEn} alt="" />
                </div>
            </div>
            <div>
            <ul className='condition-ul'>
                {
                    conditions[1].condition.map((e, index) => 
                     <li key={index}>{e}</li>   
                    )
                }
                </ul>
                <div className='picture-condition-box'>
                    <img src={ieltsLogo} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="register-container">
        <div>
            <div>
            <h3>ЗАПИШИТЕСЬ НА ПЕРВОЕ
                ЗАНЯТИЕ</h3>
                </div>
                <div>
                <b>Мы предлагаем пробный урок на курсы английского языка для комфортного знакомства с преподавателем
и выбора подходящей программы обучения. Оставьте заявку и мы свяжемся с вами в ближайшее время!</b>
        </div>
        </div>
        <div className='register-input-box'>
<form onSubmit={async e => {
         e.preventDefault()
         if(firstname.length > 0 && telephone.length > 8){ 
            const response = await fetch('http://localhost:5000/new/students',{
              method: "POST",
              body: JSON.stringify({
                  firstname,
                  telephone
              }),
              headers: {
                  'Content-Type': "application/json; charset=UTF-8"
              }
          })
          const data = await response.json()
          if(data.status === 200){
              alert(data.data)
          }}
          }}>
    <input value={firstname} onInput={(e) => {
setFirstname(e.target.value)
}}  type="text" placeholder='Ваше имя' />
    <input value={telephone} onInput={(e) => {
                            setTelephone(e.target.value)
                        }}  type="text" placeholder='Ваше телефон' />
    <button>Записаться</button>
</form>
        </div>
    </div>
    <footer>
        <h2>Наше место положение <i style={{color: "white"}}><ImLocation2/></i></h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.951500333577!2d69.20646212629943!3d41.28815999336483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smirzo%20ulug&#39;bek%20metro!5e0!3m2!1sru!2s!4v1692009348515!5m2!1sru!2s"></iframe>
    </footer>
    </div>
  )
}

export default Main