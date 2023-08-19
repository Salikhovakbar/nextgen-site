import './Main.css'
import { useState, useEffect, useRef } from 'react'
import {BiLogoTelegram, BiSolidPhoneCall} from 'react-icons/bi'
import { FaTiktok, FaYoutube, FaWindowClose } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { BsInstagram, BsCalendarFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { MdCastForEducation, MdMobileFriendly } from 'react-icons/md'
import { AiFillBook, AiOutlineRight } from'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import genEn from '../../images/general-english.png'
import ieltsLogo from '../../images/IELTS.png'
import { useSelector } from 'react-redux'
const Main = () => {
 const translation = useSelector(({languageShift}) => languageShift)
 const [firstname,setFirstname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [mediaCount, setMediaCount] = useState('')
    const [registerForm, setRegisterForm] = useState(false)
const [teachersInfo, setTeachersInfo] = useState('')
const conditionCarouselEl = useRef()
const [conditionPage, setConditionPage] = useState(0)
const [loadingStatement, setLoadingStatement]= useState(false)
let conditions=[]
let headingConditions = []
let whyToChooseUs = []
let registrationText = []
if(translation.language.toLowerCase() === 'русский'){
conditions =[
    {
        type: 'general english',
        condition: [
            'Группа 10 (±2) Учеников',
            'Фирменная книга',
            'Фирменная тетрадь Grammar и Vocabulary',
            'Мобильное приложение',
            'Сервис Teaching Assistant and Speaking Assistant (два дополнительных учителя)',
            'Speaking Club (по воскресеньям)',
            'Групповые занятия (550.000 UZS)',
            "Индивидуальные занятия (1.650.000 UZS)"
        ]
    },{
        type: 'ielts',
        condition: [
            'Группа 10 (±2) Учеников',
            'Фирменная книга',
            'Фирменная тетрадь Grammar и Vocabulary',
            'Мобильное приложение',
            'Сервис Teaching Assistant and Speaking Assistant (два дополнительных учителя)',
            'Speaking Club (по воскресеньям)',
            'Mock Exam по воскресеньям (Speaking and Writing evaluation)',
            'Групповые занятия (650.000 UZS)',
            "Индивидуальные занятия (2.000.000 UZS)"
        ]
    }
]
headingConditions = ['O НАШЕМ УЧЕБНОМ ЦЕНТРЕ','НАШИ УЧИТЕЛЯ','ЦЕНЫ']
whyToChooseUs = [
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
registrationText = [
    "Записаться на первый урок!",
    "Оставьте заявку и наш менеджер Свяжется с вами.",
    'Ваше имя',
    "Ваше телефон",
    "Записаться",
    "Мы предлагаем пробный урок на курсы английского языка для комфортного знакомства с преподавателеми выбора подходящей программы обучения. Оставьте заявку и мы свяжемся с вами в ближайшее время!"
]
}

else if(translation.language.toLowerCase() === "o'zbekcha"){
 conditions =[
        {
            type: 'general english',
            condition: [
                'Guruhda 10 (±2) oquvchi',
                'Imzo kitobi',
                'Korporativ daftar Grammar и Vocabulary',
                'Mobil ilova',
                'Servis Teaching Assistant and Speaking Assistant (ikkita qoshimcha oqituvchi)',
                'Speaking Club (yakshanba kunlari)',
                'Guruh darslari (550.000 UZS)',
                "Individual darslar (1.650.000 UZS)"
            ]
        },{
            type: 'ielts',
            condition: [
                'Guruhda 10 (±2) oquvchi',
                'Imzo kitobi',
                'Korporativ daftar Grammar и Vocabulary',
                'Mobil ilova',
                'Servis Teaching Assistant and Speaking Assistant (ikkita qoshimcha oqituvchi)',
                'Speaking Club (yakshanba kunlari)',
                'Mock Exam yakshanba kunlari(Speaking and Writing evaluation)',
                'Guruh darslari (650.000 UZS)',
                "Individual darslar (2.000.000 UZS)"
            ]
        }
    ]   
    headingConditions = ["BIZNING INGLIZ TILI O'QUV MARKAZIMIZ HAQIDA", "O'QITUVCHILARIMIZ",
    "Narxlar"
]
whyToChooseUs = [
    {
icon: <GiTeacher/>,
title: "O'qituvchilar",
supportingSentence: "O'qituvchilar sizga yordam berishadi(main teacher, teaching assistant, speaking assistant)"
},
{
icon: <BsCalendarFill/>,
title: 'Kundalik tashrif',
supportingSentence: 'Darslardan tashqari siz kovorking zonasiga tashrif buyurishingiz mumkin'
},
{
icon: <MdCastForEducation/>,
title: 'Britain education system (Pearson education)',
supportingSentence: "Bizning ta'limimiz Oksford universiteti matbuoti tizimiga asoslangan"
},
{
icon: <AiFillBook/>,
title: 'Bepul markali kitoblar (yuqori sifatli)',
supportingSentence: "NEXTGEN o'z o'quvchilarini bepul sifatli kitoblar bilan ta'minlaydi "
},
{
icon: <MdMobileFriendly/>,
title: 'Mobile app',
supportingSentence: 'Bizning vazifalarimizni bajarish qobiliyati ilova'
},
{
icon: <HiUserGroup/>,
title: 'Co-working zone',
supportingSentence: "Shuningdek, coworking zone-ga tashrif buyurish imkoniyati mavjud, u erda siz hamkasblaringizga qo'shilishingiz mumkin"
}
]
registrationText=[
    "Birinchi darsga yoziling!",
    "So'rov qoldiring va menejerimiz siz bilan bog'lanadi.",
    "Ismingiz",
    "Telefon raqamingiz",
    "Ro'yxatdan o'tish",
    "O'qituvchi bilan qulay tanishish uchun ingliz tili kurslarida sinov darsini taklif etamiz va tegishli o'quv dasturini tanlash. So'rov qoldiring va biz tez orada siz bilan bog'lanamiz!"
]
}
const mediaApps = [
    {
        media: 'Telegram',
        icon: <BiLogoTelegram/>,
        link: "https://t.me/nextgen_english_school"
    },
    {
        media: 'Instagram',
        icon: <BsInstagram/>,
        link: "https://instagram.com/stories/nextgen_english_school"
    },
    {
        media: 'Facebook',
        icon: <GrFacebook/>,
        link: "https://facebook.com/stories/nextgen_english_school"
    },
    {
        media: 'YouTube',
        icon: <FaYoutube/>,
        link: "https://www.youtube.com/@nextgen_english_school"
    },
    {
        media: 'Tik-Tok',
        icon: <FaTiktok/>,
        link: "https://www.tiktok.com/@nextgenengliadmin"
    }
];
const hosting = 'http://localhost:5000';
useEffect( () => {
   fetch(hosting + '/teachers-data')
  .then(response => response.json())
  .then(data => {
      if(data) {
        setTeachersInfo(data.data)
    setLoadingStatement(true)
    }
    else setLoadingStatement(false)
})
}, [])
useEffect(() => {
conditionCarouselEl.current.scrollLeft = conditionPage * conditionCarouselEl.current.offsetWidth
}, [conditionPage])
useEffect(() => {
window.scrollTo({top: 0})
}, [])
    return (
    <div>
        <div className="main-container">
            <div className='register-box'>
                <div className='application-box'>
<div>
<h2>{registrationText[0]}</h2>
<p>{registrationText[1]}</p>
</div>
                    <form onSubmit={async(e) => {
                        e.preventDefault()
                       if(firstname.length > 0 && telephone.length > 8){ 
                        const response = await fetch(hosting +'/new/students',{
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
                        <input required value={firstname} onInput={(e) => {
                            setFirstname(e.target.value)
                        }} type="text" placeholder={registrationText[2]}/>
                        <input required value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
                        setTelephone(e.target.value)
                        }} type="text" placeholder={registrationText[3]}/>
                    <button style={firstname.length > 0 && telephone.length > 8 ? {background: 'black', color: "white"}: {background: "rgb(222, 222, 222)"}} className='btn-submit-application'>{registrationText[4]}</button>
                    </form>
                </div>
            </div>
            <div className="main-btn-box">
            <button onClick={() => {
setRegisterForm(true)
            }} className='main-btn'>{registrationText[4]}</button>
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
            <div className='call-box'>
            <div onClick={() => {
                window.scrollTo({top: 0})
            }} className='back-to-top'><AiOutlineRight/></div>
            <div><a href="tel:+998907888875"><BiSolidPhoneCall/></a></div>
        </div>
        </div>
                    <div style={registerForm? {display: 'flex'} : {display: 'none'}} className='registration-application-container'>
                    <div onClick={() => {
            setRegisterForm(false)
        }}  className="shadow"></div>
                    <div>
                        <div className="application-box-top">
                            <p style={translation.language.toLowerCase() === "o'zbekcha" ? {fontSize: '16px'}: null}>{registrationText[1]}</p><i onClick={() => {
                                setRegisterForm(false)
                            }}><FaWindowClose/></i>
                        </div>
                        <form className='form-register-popup' onSubmit={async(e) => {
                        e.preventDefault()
                       if(firstname.length > 0 && telephone.length > 8){ const response = await fetch(hosting +'/new/students',{
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
                        }} type="text" placeholder={registrationText[2]}/>
                        <input value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
                        setTelephone(e.target.value)
                        }} type="text" placeholder={registrationText[3]}/>
                    <button style={firstname.length > 0 && telephone.length > 8 ? {background: 'black', color: "white"}: {background: "rgb(222, 222, 222)"}} className='btn-submit-application'>{registrationText[4]}</button>
                    </form>
                    </div>
                    </div>
                    <h2 id='about'>{headingConditions[0]}</h2>
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
                    <h2 id="team">{headingConditions[1]}</h2>
                    <div className='swiper-computer'>
       {loadingStatement ? 
                    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >

      { teachersInfo.map((e, index) => 
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
      )  }
    </Swiper> : <div style={{width: '100%', height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>}
    </div>
    <div className='swiper-tablet'>
        {loadingStatement ? 
    <Swiper 
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >

      {teachersInfo.map((e, index) => 
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
      ) }
      </Swiper>
:    <div style={{width: '100%', height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
}
    </div>
    <div className='swiper-phone'>
    {loadingStatement ?
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,  A11y]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >

      {teachersInfo.map((e, index) => 
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
      )} 
    </Swiper>
    : <div style={{width: '100%', height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
    </div>
    <h2 id='price'>{headingConditions[2]}</h2>
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
            <h3>{registrationText[0]}</h3>
                </div>
                <div>
                <b>{registrationText[5]}</b>
        </div>
        </div>
        <div className='register-input-box'>
<form onSubmit={async e => {
         e.preventDefault()
         if(firstname.length > 0 && telephone.length > 8){ 
            const response = await fetch(hosting +'/new/students',{
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
}}  type="text" placeholder={registrationText[2]} />
    <input value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
                            setTelephone(e.target.value)
                        }}  type="text" placeholder={registrationText[3]} />
    <button>{registrationText[4]}</button>
</form>
        </div>
    </div>
    </div>
  )
}

export default Main