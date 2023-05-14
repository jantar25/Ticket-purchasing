import React from 'react'

import { useCardInfoContext } from '../../Context/Context'
import CreditCard from './CreditCard/CreditCard'

const CreditCards = () => {
  const cardInfos = useCardInfoContext()
  return (
    <div>
        {cardInfos.map((creditCardInfo,index) => 
            <CreditCard key={index} creditCardInfo={creditCardInfo} />
        )}
    </div>
  )
}

export default CreditCards