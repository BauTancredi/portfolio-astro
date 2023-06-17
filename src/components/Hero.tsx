import React from 'react'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import mailLogo from '../assets/mail.svg'
import whatsappLogo from '../assets/whatsapp.svg'
import arrow from '../assets/arrow.svg'

const Hero = () => {
  return (
    <>
      <h1>BAUTISTA TANCREDI</h1>
      <p>Combining my deep understanding of user experience with my proficiency in frontend development, I craft interactive designs that tell compelling digital stories</p>
      <div className='absolute bottom-0 right-2'>
      <img src={githubLogo} alt="" className='invert w-10'/>
      <img src={linkedinLogo} alt="" className='invert w-10'/>
      <img src={mailLogo} alt="" className='invert w-10'/>
      <img src={whatsappLogo} alt="" className='invert w-10'/>
      </div>
      <img src={arrow} alt="" />
    </>
  )
}

export default Hero