import React from 'react'
import './Nav.css'
import NetflixLogo from '../assets/images/netflixLogo.svg'
const Nav = () => {
  return (
    <div>

        <div className='nav'>
            <img className='"nav__logo' src={NetflixLogo} alt='Netflix Logo'/>
            <img className='"nav__avatar' src="" alt='Netflix Logo'/>

        </div>
    </div>
  )
}

export default Nav