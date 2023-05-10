import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs'

import './show.css'

const Show = ({ticket,toggleAccordion,clicked}) => {

  return (
    <div className={`show-container ${clicked === ticket.id && 'show-card'}`}>
        <div className='show-visible'>
            <div className='show-clickable' onClick={() => toggleAccordion(ticket.id)}>
                <div className='icon'>{clicked === ticket.id ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                <div className='info-container'>
                    <div className='date'>
                        <h5>{ticket.date.split(',')[1]}</h5>
                        <p>{ticket.date.split(',')[0]}.{ticket.time}</p>
                    </div>
                    <div className='info'>
                        <h4>{ticket.artist}</h4>
                        <p>{ticket.location}</p>
                        <h6>ADD-ONS AVAILABLE</h6>
                    </div>
                </div>
                <div className='icon-end'>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <button>See Ticket</button>
        </div>
        <div>
            {clicked === ticket.id ? 
            <div className='show-hiden'>
                <p>{ticket.location}</p>
                <button>See Ticket</button>
            </div> 
            : null}
        </div>
    </div>
  )
}

export default Show