import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import './priceModal.css'

const PriceAndModal = ({position}) => {
    const [toggleModal,setToggleModal] = useState(false);

  return (
    <div className='ticket' onClick={()=>setToggleModal(!toggleModal)}>
    {toggleModal && 
    <div className='modal-container'>
      <div className='modal-cover'>
        <div className='modal'>
            <div className="content">
                <div className="close" onClick={()=>setToggleModal(!toggleModal)}>
                <AiOutlineClose />
                </div>
                <div className="">
                    {Object.keys(position)}
                </div>
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