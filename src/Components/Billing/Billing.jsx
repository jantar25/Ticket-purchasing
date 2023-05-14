import React,{ useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from 'react-icons/io';

import './billing.css'

const Billing = ({order}) => {
    const [toggleDetails,setToggleDetails] = useState(false)
    const resaleTickets = order.numberOfTickect * order.ticketPrice
    const serviceFee = order.numberOfTickect * 5
    const facilityCharge = order.numberOfTickect * 2.5
    const processingFee = 1.5
    const total = resaleTickets + serviceFee + facilityCharge + processingFee

  return (
    <div className='wrap-right'>
        <div className='header' onClick={()=>setToggleDetails(!toggleDetails)} >
            <h3>Total</h3>
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
  )
}

export default Billing