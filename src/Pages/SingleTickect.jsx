import React from 'react'
import { useLocation } from 'react-router-dom'

import tickets from '../Constants/ticketsData'

const SingleTickect = () => {
    const location = useLocation()
    const currentShowId = location.pathname.split('/')[2]
    const currentShow = tickets.find(ticket => ticket.id === Number(currentShowId))

  return (
    <div>
        {currentShow.artist}
    </div>
  )
}

export default SingleTickect