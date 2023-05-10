import React from 'react'

import './navbar.css'
import searchIcon from '../../Assets/search.svg'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <h2>Tickets<span className='logo'>Shows</span></h2>
        </div>
        <div className='navbar-center'>
            <div className='search-container'>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' placeholder='Search...' />
            </div>
            <ul>
                <li>Concert</li>
                <li>Sport</li>
                <li>Game</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <button>Sign In</button>
            <span>Help</span>
        </div>
    </div>
  )
}

export default NavBar