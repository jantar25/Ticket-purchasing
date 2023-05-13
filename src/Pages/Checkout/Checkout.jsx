import React from 'react'

import { useOrderContext } from '../../Context/Context'
import NavBar from '../../Components/NavBar/NavBar'
import './checkout.css'


const Checkout = () => {
    const order = useOrderContext();
    console.log(order)
  return (
    <div>
        <NavBar />
        <div>Checkout</div>
    </div>
  )
}

export default Checkout