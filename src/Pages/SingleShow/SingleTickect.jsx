import React from 'react'
import { useLocation } from 'react-router-dom'

import tickets from '../../Constants/ticketsData'
import './singleTicket.css'


const SingleTickect = () => {
    const location = useLocation()
    const currentShowId = location.pathname.split('/')[2]
    const currentShow = tickets.find(ticket => ticket.id === Number(currentShowId))

  return (
    <div className='single-show-container'>
        <div className='single-show-info'>
          <div className='date'>
            <h3>{currentShow.date.split(',')[1]}</h3>
            <p>{currentShow.date.split(',')[0]}.{currentShow.time}</p>
          </div>
          <img src={currentShow.image} alt={currentShow.artist} />
          <h2>{currentShow.artist}</h2>
          <p>{currentShow.location},{currentShow.city}</p>
        </div>
        <div className='show-prices'>
          <h4>Book a seat with:</h4>
          <div className='tickets'>
            {currentShow.priceByPosition.map((position,index) =>
            <div className='ticket' key={index}>
              <h4>
                {Object.keys(position)}
                <span> Ticket cost: </span>
              </h4> 
              <h3>${Object.values(position)}</h3>
            </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default SingleTickect