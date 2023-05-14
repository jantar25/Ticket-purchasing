import React,{ useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import {BsCreditCard2Front} from 'react-icons/bs'
import {ImCreditCard} from 'react-icons/im'
import { AiOutlinePlus } from 'react-icons/ai';

import pay3Img from '../../Assets/pay3.png'
import './paymentForm.css'

const PaymentForm = ({handleToggleForm}) => {
  const [toggleAddress2,setToggleAddress2] = useState(false)
  const [inputs,setInputs] = useState({
    CardName:'',
    cardNumber:'',
    cardExpiration:'',
    cardCode:'',
    country:'',
    address:'',
    address2:'',
    city:'',
    state:true,
    postalCode:'',
    phoneNumber:'',
    isForFutureUse:false,
    isForBuyTickets:false
  })

  const handleInputs = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log(inputs)
    handleToggleForm()
  }

  return (
    <div className='paymentForm-container'>
        <div className='back-btn' onClick={handleToggleForm}>
            <IoIosArrowBack />
            <span>Back to Stored Cards</span>
        </div>
        <img src={pay3Img} alt='cards-img' />
        <form onSubmit={handleSubmitForm}>
          <div className='input-container'>
            <label>Name on Card</label>
            <input type='text' name='CardName' onChange={handleInputs} />
          </div>
          <div className='input-container'>
            <label>Card Number</label>
            <div className='cardNumber-container'>
              <div className='icon'><BsCreditCard2Front /></div>
              <input type='text' name='cardNumber' onChange={handleInputs} />
            </div>
          </div>
          <div>
            <div className='input-container'>
              <label>Expiration Date</label>
              <input type='text'
                name='cardExpiration'
                placeholder='MM/YY'
                onChange={handleInputs} />
            </div>
            <div className='cardCode-container'>
              <div className='input-container'>
                <label>Security Code</label>
                <div className='cardCode-text'>
                  <input
                    type='password'
                    name='cardCode' 
                    placeholder='CVV'
                    style={{width:'60px'}}
                    onChange={handleInputs}/>
                  <div className='icon'><ImCreditCard /></div>
                  <p>3-digits on back of card</p>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container'>
            <label>Country</label>
            <select name='country' onChange={handleInputs}>
              <option value='DRC'>DRCongo</option>
              <option value='Rwanda'>Rwanda</option>
              <option value='Uganda'>Uganda</option>
            </select>
          </div>
          <div className='address-container'>
            <div className='input-container'>
              <label>Address</label>
              <input type='text' name='address' onChange={handleInputs}/>
            </div>
            {!toggleAddress2?
            <div className='address-line2' onClick={()=>setToggleAddress2(!toggleAddress2)}>
              <AiOutlinePlus />
              <h5>Add Unit#/ Address line 2</h5>
            </div> :
            <div className='input-container'>
              <label>Address line 2</label>
              <input type='text' name='address2' onChange={handleInputs}/>
            </div>
            }
          </div>
          <div className='input-container'>
              <label>City</label>
              <input type='text' name='city' onChange={handleInputs}/>
          </div>
          <div className='input-container'>
            <label>State</label>
            <select name='state' onChange={handleInputs}>
              <option value='true'>Active</option>
              <option value='false'>Inactive</option>
            </select>
          </div>
          <div className='input-container'>
              <label>Postal Code</label>
              <input type='text' name='postalCode' onChange={handleInputs} />
          </div>
          <div className='input-container' onChange={handleInputs}>
              <label>Phone Number</label>
              <input type='text' name='phoneNumber' />
          </div>
          <div className='saveCheckbox-container'>
              <input type="checkbox" name='isForFutureUse' onChange={handleInputs}/>
              <p>Save this card for future purchases</p>
          </div>
          <p>Set as a primary card for:</p>
          <div>
              <div className='saveCheckbox-container'>
                <input type="checkbox" name='isForBuyTickets' onChange={handleInputs}/>
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