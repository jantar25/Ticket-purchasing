import React,{ useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import {BsCreditCard2Front} from 'react-icons/bs'
import {ImCreditCard} from 'react-icons/im'
import { AiOutlinePlus } from 'react-icons/ai';

import pay3Img from '../../Assets/pay3.png'
import './paymentForm.css'

const PaymentForm = ({handleToggleForm}) => {
  const [toggleAddress2,setToggleAddress2] = useState(false)

  return (
    <div className='paymentForm-container'>
        <div className='back-btn' onClick={handleToggleForm}>
            <IoIosArrowBack />
            <span>Back to Stored Cards</span>
        </div>
        <img src={pay3Img} alt='cards-img' />
        <form>
          <div className='input-container'>
            <label>Name on Card</label>
            <input type='text' name='CardName' />
          </div>
          <div className='input-container'>
            <label>Card Number</label>
            <div className='cardNumber-container'>
              <div className='icon'><BsCreditCard2Front /></div>
              <input type='text' name='cardNumber' />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label>Expiration Date</label>
              <input type='text' name='cardExpiration' placeholder='MM/YY' />
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
          <div className='input-container'>
            <label>Country</label>
            <select name='country'>
              <option value='DRC'>DRCongo</option>
              <option value='Rwanda'>Rwanda</option>
              <option value='Uganda'>Uganda</option>
            </select>
          </div>
          <div className='address-container'>
            <div className='input-container'>
              <label>Address</label>
              <input type='text' name='address' />
            </div>
            {!toggleAddress2?
            <div className='address-line2' onClick={()=>setToggleAddress2(!toggleAddress2)}>
              <AiOutlinePlus />
              <h5>Add Unit#/ Address line 2</h5>
            </div> :
            <div className='input-container'>
              <label>Address line 2</label>
              <input type='text' name='address2' />
            </div>
            }
          </div>
          <div className='input-container'>
              <label>City</label>
              <input type='text' name='city' />
          </div>
          <div className='input-container'>
            <label>State</label>
            <select name='state'>
              <option value='active'>Active</option>
              <option value='Inactive'>Inactive</option>
            </select>
          </div>
          <div className='input-container'>
              <label>Postal Code</label>
              <input type='text' name='postalCode' />
          </div>
          <div className='input-container'>
              <label>Phone Number</label>
              <input type='text' name='phoneNumber' />
          </div>
          <div className='saveCheckbox-container'>
              <input type="checkbox" />
              <p>Save this card for future purchases</p>
          </div>
          <p>Set as a primary card for:</p>
          <div>
              <div className='saveCheckbox-container'>
                <input type="checkbox" />
                <p>Payment</p>
              </div>
              <p>For when you are purchasing tickets</p>
          </div>
          <button className='submit' type='submit' >Add New Card</button>
          <div className='cancel'>
            <span onClick={handleToggleForm}>Cancel</span>
          </div>
        </form>
    </div>
  )
}

export default PaymentForm