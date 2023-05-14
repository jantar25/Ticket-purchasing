import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import pay3Img from '../../Assets/pay3.png'
import './paymentForm.css'

const PaymentForm = ({handleToggleForm}) => {
  return (
    <div>
        <div onClick={handleToggleForm}>
            <IoIosArrowBack />
            <span>Back to Stored Cards</span>
        </div>
        <img src={pay3Img} alt='cards-img' />
    </div>
  )
}

export default PaymentForm