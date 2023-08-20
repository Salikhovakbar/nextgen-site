import './Login.css'
import logo from '../../images/logo-nextgen.png'
import { useState } from 'react'
import {Link ,useParams } from 'react-router-dom' 
const Registration = () => {
const [password, setPassword] = useState('')
const [telephone, setTelephone] = useState('')
const {route} = useParams()
if(localStorage.getItem('token')){
    ;(async() => {
    const response = await fetch('http://localhost:5000/check-token', {
        method: 'GET',
        headers: {
            token: localStorage.getItem('token')
        }
    })
    const data = await response.json()
    if(data.status === 200) window.location = data.route
})()
}
return (
    <div className='registration-container'>
    <div className="registration-svg-picture">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.575 647.182" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g id="Group_6" data-name="Group 6" transform="translate(-231.222 -125)">
    <path id="Path_80-123" data-name="Path 80" d="M1001.142,124.77H760.527a51.15,51.15,0,0,0-49.9,39.9L589.051,703.938a41.34,41.34,0,0,0,38.294,50.382L874.7,766.507a54.615,54.615,0,0,0,56.43-44.828L1000.1,340.412l5.131,1.466,13.2-72.265-5.281-1.32,19.251-106.426a31.493,31.493,0,0,0-31.25-37.1Z" transform="translate(-0.099 0.231)" fill="#3f3d56"/>
    <path id="Path_81-124" data-name="Path 81" d="M792.2,136.395H764.116a35.349,35.349,0,0,0-34.536,27.813l-116.7,534.868A21.9,21.9,0,0,0,632.849,725.6L879.4,741.76a28.367,28.367,0,0,0,29.773-23.277l99.58-552.838a24.846,24.846,0,0,0-24.452-29.25H957.658a11.726,11.726,0,0,0-11.323,8.677h0a10.352,10.352,0,0,1-10,7.661H809.847A17.7,17.7,0,0,1,792.2,136.395Z" transform="translate(-0.099 0.231)" fill="#fff"/>
    <path id="Path_93-125" data-name="Path 93" d="M928.494,510.313a2,2,0,0,0,2.036-1.638l54.523-300.917a2.021,2.021,0,0,0-.417-1.632,1.962,1.962,0,0,0-1.5-.729l-248.059-2.93h-.023a1.988,1.988,0,0,0-1.925,1.562L668.853,495.179a2.021,2.021,0,0,0,.356,1.648,1.964,1.964,0,0,0,1.473.785Z" transform="translate(-0.099 0.231)" fill="#e6e6e6"/>
    <path id="Path_94-126" data-name="Path 94" d="M713.229,529.535a1,1,0,0,0-.973.773l-2.323,9.956a1,1,0,0,0,.9,1.225l131.23,9.327a1.009,1.009,0,0,0,1.053-.807l2.234-11.519a1,1,0,0,0-.922-1.188L713.29,529.537Z" transform="translate(-0.099 0.465)" fill="#e6e6e6"/>
    <path id="Path_95-127" data-name="Path 95" d="M872.666,587.808a1,1,0,0,0,1.051-.758l2.844-11.543a1,1,0,0,0-.9-1.237L708.072,562.549a.989.989,0,0,0-1.029.713l-2.955,9.975a1,1,0,0,0,.878,1.28Z" transform="translate(-0.099 0.454)" fill="#e6e6e6"/>
    <path id="Path_96-128" data-name="Path 96" d="M863.666,624.808a1,1,0,0,0,1.051-.758l2.844-11.543a1,1,0,0,0-.9-1.237L699.072,599.549a.989.989,0,0,0-1.029.713l-2.955,9.975a1,1,0,0,0,.878,1.28Z" transform="translate(-0.099 0.454)" fill="#e6e6e6"/>
    <path id="Path_79-129" data-name="Path 79" d="M508.877,752.008c0,8.369-76.605,9.26-170.889,15.153-94.2,5.887-170.889-6.784-170.889-15.153s77.047-25.207,170.889-15.153C432.272,746.957,508.877,743.639,508.877,752.008Z" transform="translate(64.123 3.512)" fill="#e6e6e6"/>
    <path id="Path_97-130" data-name="Path 97" d="M786.481,688.283a.989.989,0,0,0,1.064-.754l6.013-24.051a1,1,0,0,0-.886-1.24l-102.916-8.656a1.018,1.018,0,0,0-1.06.779l-5.129,23.083a1,1,0,0,0,.883,1.213Z" transform="translate(-0.099 0.231)" fill="#6c63ff"/>
    <path id="Path_111-131" data-name="Path 111" d="M315.09,570.537a10.743,10.743,0,0,0,1.582-16.4l4.167-93.018L299.624,463.5l1.233,90.985a10.8,10.8,0,0,0,14.234,16.048Z" transform="translate(55.741 19.97)" fill="#a0616a"/>
    <path id="Path_112-132" data-name="Path 112" d="M69.534,574.966l12.075,2.123,11.934-45.564-15.821-3.133Z" transform="translate(340 173)" fill="#a0616a"/>
    <path id="Path_113-133" data-name="Path 113" d="M350.232,727.314h38.531V742.2H365.119a14.887,14.887,0,0,1-14.887-14.887Z" transform="translate(661.936 1542.365) rotate(-170.029)" fill="#2f2e41"/>
    <path id="Path_114-134" data-name="Path 114" d="M36.392,581.01h12.26l5.832-47.288H36.39Z" transform="translate(340 173)" fill="#a0616a"/>
    <path id="Path_115-135" data-name="Path 115" d="M318.024,730.536h38.531v14.887H332.911a14.887,14.887,0,0,1-14.887-14.887h0Z" transform="translate(730.354 1495.915) rotate(179.997)" fill="#2f2e41"/>
    <path id="Path_116-136" data-name="Path 116" d="M371.8,717.09a4.735,4.735,0,0,1-.572-.034l-14.43-1.187a4.881,4.881,0,0,1-4.243-5.659l14.325-70.681-9-47.474a1.627,1.627,0,0,0-3.219.16L341.4,712.842a4.924,4.924,0,0,1-5.21,4.437l-13.595-.506a4.888,4.888,0,0,1-4.536-4.631l1.086-145.768,70.481-8.81,4.924,76.041-.02.081-17.991,79.675A4.886,4.886,0,0,1,371.8,717.09Z" transform="translate(55.741 19.97)" fill="#2f2e41"/>
    <circle id="Ellipse_16" data-name="Ellipse 16" cx="24.561" cy="24.561" r="24.561" transform="translate(373.568 371.694)" fill="#a0616a"/>
    <path id="Path_117-137" data-name="Path 117" d="M365.53,577.467a20.111,20.111,0,0,1-10.857-3.106c-11.9-7.436-25.411-4.481-32.407-2.057a4.88,4.88,0,0,1-4.221-.481,4.811,4.811,0,0,1-2.224-3.552L303.1,454.646c-2.132-19.038,9.336-36.937,27.268-42.56h0q1.011-.317,2.055-.6a39.569,39.569,0,0,1,32.972,5.723,40.2,40.2,0,0,1,17.167,29.353l10.711,114.387a4.807,4.807,0,0,1-1.527,4.007C387.99,568.428,377.092,577.466,365.53,577.467Z" transform="translate(55.741 19.97)" fill="#6c63ff"/>
    <path id="Path_118-138" data-name="Path 118" d="M326.789,479.012l-28.7-3.156a5.717,5.717,0,0,1-4.905-7.134l7.306-27.846a15.879,15.879,0,1,1,31.556,3.563l1.085,28.675a5.718,5.718,0,0,1-6.338,5.9Z" transform="translate(55.741 19.97)" fill="#6c63ff"/>
    <path id="Path_119-139" data-name="Path 119" d="M393.156,566.554a10.743,10.743,0,0,0-.406-16.468l-7.073-92.842-20.789,4.68,12.2,90.414a10.8,10.8,0,0,0,16.064,14.216Z" transform="translate(55.741 19.97)" fill="#a0616a"/>
    <path id="Path_120-140" data-name="Path 120" d="M356.919,473.176a5.711,5.711,0,0,1-1.818-4.4l1.085-28.675a15.878,15.878,0,1,1,31.556-3.563l7.306,27.846a5.717,5.717,0,0,1-4.905,7.134l-28.7,3.156a5.711,5.711,0,0,1-4.52-1.5Z" transform="translate(55.741 19.97)" fill="#6c63ff"/>
    <path id="Path_121-141" data-name="Path 121" d="M340.927,401.771a5.683,5.683,0,0,1-1.3-.151l-.125-.03c-21.594-3.3-26.367-15.812-27.414-21.035-1.084-5.408.15-10.628,2.94-12.656-1.521-4.8-1.277-9.061.727-12.662,3.5-6.28,11.081-8.4,12.1-8.664,6.058-4.469,13.306-1.486,14.625-.881,11.719-4.335,16.2-.727,17.008.079,5.238.941,8.431,2.964,9.491,6.016,1.991,5.731-4.305,12.86-4.574,13.161l-.14.156-9.38.447a6.358,6.358,0,0,0-5.981,7.317h0a29.611,29.611,0,0,0,.96,3.355c1.6,5.006,2.8,9.283,1.254,10.909a2.51,2.51,0,0,1-2.625.455c-1.467-.392-2.462-.31-2.958.245-.77.859-.535,3.035.662,6.125a5.739,5.739,0,0,1-1.046,5.847,5.568,5.568,0,0,1-4.226,1.967Z" transform="translate(55.741 19.97)" fill="#2f2e41"/>
  </g>
</svg>
    </div>
<div className="application-form-box">
    <div className="logo-box">
        <img src={logo} alt="" />
    </div>
    <div>
    <h1>WELCOME TO NEXTGEN 
ENGLISH SCHOOL</h1>
    </div>
    <div>
    <p className='title-text'>Fill the requirements and get into your personal cabinet</p>
    </div>
    <div>
<form onSubmit={ async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/${route}`,{
        method: 'POST',
        body: JSON.stringify({
            password,
            telephone
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    const data = await response.json()
    if(data?.status === 404){
        alert(data.error)
    }
    else if(data?.status === 200){
        localStorage.setItem('token', data.token)
        window.location = (route === 'students-login'? '/student-cabinet' : '/teacher-cabinet')
    }
}} className='register-form'>
<input type="text" value={password} onInput={(e) => {
    setPassword(e.target.value)
}} placeholder='Password' />
<div className='telephone-box-input'>
   <div className='telephone-code-box'>+998</div> <input type="number" value={telephone.length > 9 ? telephone.slice(0, 9) : telephone} onInput={(e) => {
(setTelephone(e.target.value))
   }} />
</div>
<button className='submit-btn'>Login</button>
<div className="route-link">
<Link to={route === 'students-login' ? '/login/teachers-login': 'students-login'}>{route === 'students-login' ?'Teacher Account': 'Student Account'}</Link>
</div>
</form>
    </div>
    <div>
    </div>
    </div>    
    </div>
  )
}

export default Registration