import React from 'react'
import { MdDone } from 'react-icons/md'

import { useOrderContext } from '../../Context/Context'
import NavBar from '../../Components/NavBar/NavBar'
import './checkout.css'


const Checkout = () => {
    const order = useOrderContext();
    console.log(order)
  return (
    <div>
        <NavBar />
        <div className='checkout-container'>
            <div className='ticket-info'>
                <h4>{order.ticketartist}</h4>
                <p>{order.ticketshowlocation}</p>
                <p>{order.ticketshowtime}</p>
                <p>
                    <span>{order.numberOfTickect} {order.ticketClass}</span>
                    Ticket {order.numberOfTickect > 1 && 's'}
                </p>
            </div>
            <div className='delivery-container'>
                <div className='title'>
                    <h3>Delivery</h3>
                    <div className='icon'>
                        <MdDone />
                    </div>
                </div>
                <h5>Mobile - Free</h5>
                <p>Your phone's your ticket. Locate your tickets in your account - or in your app. 
                    When you go mobile, your tickets will not be emailed to you or available for print.</p>
            </div>
            <div>
                <div className='title'>
                    <h3>Payment</h3>
                    <div className='icon'>
                        <MdDone />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout