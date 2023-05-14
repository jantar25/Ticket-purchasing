import React from 'react'
import { MdDone } from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';


import { useOrderContext } from '../../Context/Context'
import NavBar from '../../Components/NavBar/NavBar'
import Billing from '../../Components/Billing/Billing';
import pay1Img from '../../Assets/pay1.png'
import pay3Img from '../../Assets/pay3.png'
import pay4Img from '../../Assets/pay4.png'
import pay5Img from '../../Assets/pay5.png'
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
                <div className='wrap-left'>
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
                    <div className='payment-container'>
                        <div className='title-container'>
                            <div className="left">
                                <h3>Payment</h3>
                                <div className='icon'>
                                    <MdDone />
                                </div>
                            </div>
                            <img src={pay1Img} alt="card-img" />
                        </div>
                        <div className='payment-methode'>
                            <div className='first-methode'>
                                <h4>Use Credit/Debit Card</h4>
                                <div className='first-methode-container'>
                                    <AiOutlinePlus />
                                    <div className='icon'>
                                        <BsCreditCard2Front />
                                    </div>
                                    <h4>Add New Card</h4>
                                </div>
                            </div>
                            <hr />
                            <div className='second-methode'>
                                <h4>Or pay with</h4>
                                <p>By using a digital wallet and continuing past this page, 
                                    you have read and are accepting the <span>Terms of Use</span>.</p>
                                <div className="images-container">
                                    <img src={pay4Img} alt='Paypal-img' />
                                    <img src={pay5Img} alt='klarna-img' />
                                </div>
                            </div>
                            <hr />
                            <div className='third-methode'>
                                <AiOutlinePlus />
                                <h4>
                                    <span>Add Credits</span>/
                                    <span>Promo Code</span>/
                                    <span>Gift Card</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Billing order={order} />
            </div>
        </div>
    </div>
  )
}

export default Checkout