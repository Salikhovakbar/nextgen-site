import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
    <h2>Наше место положение <i style={{color: "white"}}><ImLocation2/></i></h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.4764299536611!2d69.20728021024946!3d41.289156323043066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bda83e41449%3A0x9320131881a1772!2sMILON%20CHILONZOR!5e0!3m2!1sru!2s!4v1692188876728!5m2!1sru!2s"></iframe>
</footer>
  )
}

export default Footer