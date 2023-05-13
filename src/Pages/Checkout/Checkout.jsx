import React, { useState } from 'react'
import { MdDone } from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { IoIosArrowUp,IoIosArrowDown } from 'react-icons/io';

import { useOrderContext } from '../../Context/Context'
import NavBar from '../../Components/NavBar/NavBar'
import pay1Img from '../../Assets/pay1.png'
import pay3Img from '../../Assets/pay3.png'
import pay4Img from '../../Assets/pay4.png'
import pay5Img from '../../Assets/pay5.png'
import './checkout.css'


const Checkout = () => {
    const [toggleDetails,setToggleDetails] = useState(false)
    const order = useOrderContext();
    const resaleTickets = order.numberOfTickect * order.ticketPrice
    const serviceFee = order.numberOfTickect * 5
    const facilityCharge = order.numberOfTickect * 2.5
    const processingFee = 1.5
    const total = resaleTickets + serviceFee + facilityCharge + processingFee

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
                <div className='wrap-right'>
                    <div className='header' onClick={()=>setToggleDetails(!toggleDetails)} >
                        <h4>Total</h4>
                        <div className="total">
                            <h3>${total}</h3>
                            {toggleDetails? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    {toggleDetails &&
                    <div className='wapped'>
                        <div className='wrap'>
                            <h5>Tickets</h5>
                            <div className='Items'>
                                <p>Resale tickets: ${order.ticketPrice} x {order.numberOfTickect}</p>
                                <p>${resaleTickets}</p>
                            </div>
                        </div>
                        <div className='wrap'>
                            <h5>Notes From Seller</h5>
                            <p>xfr XFER Proof of at least one dose of COVID-19 vaccination
                                for age 5 to 11 guests ages 12 and up will be required to show
                                proof of two dose of COVID-19 vaccination.
                            </p>
                        </div>
                        <div className='wrap'>
                            <h5>Fees</h5>
                            <div className='Items'>
                                <p>Service fee: $5 x {order.numberOfTickect}</p>
                                <p>${serviceFee}</p>
                            </div>
                            <div className='Items'>
                                <p>Facility Charge: $2.5 x {order.numberOfTickect}</p>
                                <p>${facilityCharge}</p>
                            </div>
                            <div className='Items'>
                                <p>Processing fee</p>
                                <p>${processingFee}</p>
                            </div>
                        </div>
                        <div className='wrap'>
                            <h5>Delivery</h5>
                            <div className="Items">
                                <p>Mobile Entry</p>
                                <p>Free</p>
                            </div>
                        </div>
                        <div className='button-cancel'>Cancel Order</div>
                    </div>}
                    <div>
                        <h5>* All sales Final - No refunds</h5>
                        <div className='agreement'>
                            <input type="checkbox" />
                            <p>I have read and agree to the current <span>Terms of use</span>.</p>
                        </div>
                    </div>
                    <div className='footer'>
                        <button>Place Order</button>
                        <p>* Exceptions may apply, see our Terms of use.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout