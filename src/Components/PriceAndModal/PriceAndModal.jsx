import React,{useState} from 'react'
import { AiOutlineClose,AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'

import './priceModal.css'

const PriceAndModal = ({position}) => {
    const [toggleModal,setToggleModal] = useState(false);
    const [counter,setCounter] = useState(1);

    if(toggleModal){
      document.body.classList.add('overflow-hidden')
    } else  {
        document.body.classList.remove('overflow-hidden')
    }

    const plusCounter = () => {
      setCounter(counter + 1)
    }

    const minusCounter = () => {
      if(counter > 1) {
        setCounter(counter - 1)
      }
    }


  return (
    <div className='ticket' onClick={()=>setToggleModal(!toggleModal)}>
    {toggleModal && 
    <div className='modal-container'>
      <div className='modal-cover'>
        <div className='modal'>
            <div className="content">
                <button className="close" onClick={()=>setToggleModal(!toggleModal)}>
                  <AiOutlineClose />
                </button>
                <div className="head">{Object.keys(position)} Section Seating.</div>
                <span>Basic price admission is: ${Object.values(position)}</span>
                <div>
                  <div className='counter-container'>
                    {counter > 1 && <div className='minus' onClick={minusCounter}><AiOutlineMinus /></div>}
                    <h3>{counter}</h3>
                    <div className='plus' onClick={plusCounter}><AiOutlinePlus /></div>
                  </div>
                </div>
                <div>
                  <div className='subtotal'>
                    <h6>Subtotal</h6>
                    <h5>${Object.values(position) * counter}</h5>
                  </div>
                  <p>{counter} Ticket{counter>1 && 's'}</p>
                </div>
                <button className='send'>Next</button>
            </div>
        </div>
      </div>
    </div>}
    <h4>
      {Object.keys(position)}
      <span> Ticket cost: </span>
    </h4> 
    <h3>${Object.values(position)}</h3>
  </div>
  )
}

export default PriceAndModal