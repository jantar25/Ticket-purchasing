import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { BsThreeDotsVertical,BsStarFill } from 'react-icons/bs'
import { FaCity,FaMedal } from 'react-icons/fa'
import { RiVipCrown2Fill,RiVipDiamondFill } from 'react-icons/ri'

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
            <Link to={`/ticket/${ticket.id}`} target="_blank">
                <button>See Ticket</button>
            </Link>
        </div>
        <div>
            {clicked === ticket.id ? 
            <div className='show-hiden'>
                <div className='left'>
                    <h6>LINE UP</h6>
                    <div className='profile'>
                        <img src={ticket.image} alt={ticket.artist} />
                        <h4>{ticket.artist}</h4>
                    </div>
                </div>
                <div className='center'>
                    <h6>VENUE INFO</h6>
                    <div className='profile'>
                        <div className="icon"><FaCity /></div>
                        <div className='location'>
                            <h4>{ticket.location}</h4>
                            <h6>{ticket.city}</h6>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h6>ADDs-ON</h6>
                    <div>
                        {ticket.priceByPosition.map((position,index) =>
                            <div key={index}>
                                {
                                   Object.keys(position)[0] === "VVIP"? (
                                    <div className='ticket-levels'>
                                        <RiVipCrown2Fill />
                                       <h4>{Object.keys(position)} : ${Object.values(position)}</h4> 
                                    </div>
                                   ) : Object.keys(position)[0] === "VIP"? (
                                    <div className='ticket-levels'>
                                        <RiVipDiamondFill />
                                        <h4>{Object.keys(position)} : ${Object.values(position)}</h4> 
                                    </div>
                                   ) : Object.keys(position)[0] === "Normal"? (
                                    <div className='ticket-levels'>
                                        <BsStarFill />
                                        <h4>{Object.keys(position)} : ${Object.values(position)}</h4> 
                                    </div>
                                   ): (
                                    <div className='ticket-levels'>
                                        <FaMedal />
                                        <h4>{Object.keys(position)} : ${Object.values(position)}</h4> 
                                    </div>
                                   )
                                }
                            </div>
                        )}
                    </div>
                </div>
                <Link to={`/ticket/${ticket.id}`} target="_blank">
                    <button>See Ticket</button>
                </Link>
            </div> 
            : null}
        </div>
    </div>
  )
}

export default Show