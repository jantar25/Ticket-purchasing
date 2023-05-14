import React from 'react'
import {ImCreditCard} from 'react-icons/im'

import './creditcard.css'

const CreditCard = ({creditCardInfo}) => {
  return (
    <div className='card-container'>
      <input type='radio' name={creditCardInfo.username} value={creditCardInfo.cardNumber} />
      <div className="creditCard">
        <div className='cardInfo'>
          <img src={creditCardInfo.image} alt={creditCardInfo.username} />
          <div className='content'>
            <h4>{creditCardInfo.cardType} - {creditCardInfo.cardNumber}</h4>
            <p>{creditCardInfo.username} | {creditCardInfo.expirationDate}</p>
            <div className='buttons'>
              <span>Edit</span> | <span>Delete</span>
            </div>
          </div>
        </div>
        <div className='cardCode-container'>
          <div className='input-container'>
            <label>Security Code</label>
            <div className='cardCode-text'>
                <input type='password' name='cardCode'  placeholder='CVV' style={{width:'60px'}} />
                <div className='icon'><ImCreditCard /></div>
                <p>3-digits on back of card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard