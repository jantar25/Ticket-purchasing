import React from 'react'

import CreditCard from './CreditCard/CreditCard'
import creditCardInfos from '../../Constants/creditCardInfos'

const CreditCards = () => {
  return (
    <div>
        {creditCardInfos.map(creditCardInfo => 
        <CreditCard key={creditCardInfo.id} creditCardInfo={creditCardInfo} />)}
    </div>
  )
}

export default CreditCards