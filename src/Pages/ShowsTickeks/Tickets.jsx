import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Shows from '../../Components/Shows/Shows'
import './showsTickets.css'

const Tickets = () => {
    return (
        <div>
            <NavBar />
            <div className='.shows-container'>
                <Shows />
            </div>
            <Footer />
        </div>
    )
}

export default Tickets