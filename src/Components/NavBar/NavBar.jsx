import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <h2>Tickets<span className='logo'>Shows</span></h2>
        </div>
        <div className='navbar-center'>
            <div className='search-container'>
                <AiOutlineSearch />
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