import React from 'react'

import { useOrderContext } from '../../Context/Context'
import NavBar from '../../Components/NavBar/NavBar'
import Billing from '../../Components/Billing/Billing';
import Payment from '../../Components/Payment/Payment';

import './checkout.css'


const Checkout = () => {
    const order = useOrderContext();

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
                    Ticket{order.numberOfTickect > 1 && 's'}
                </p>
            </div>
            <div className='payment-wrapper'>
                <Payment />
                <Billing order={order} />
            </div>
        </div>
    </div>
  )
}

export default Checkout