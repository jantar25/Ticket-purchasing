import React,{useState} from 'react'

import Show from './Show/Show'
import tickets from '../../Constants/ticketsData'
import './shows.css'

const Shows = () => {
    const [clicked,setClicked] = useState(null)

    const toggleAccordion = (id) => {
        if (clicked === id) {
            setClicked(null)
        } else{
            setClicked(id)
        }
    }
  return (
    <div className='shows-container'>
        <h3>All upcoming Shows: </h3>
        {tickets.map(ticket => 
            <div key={ticket.id}>
                <Show 
                    ticket={ticket}
                    toggleAccordion={toggleAccordion}
                    clicked={clicked}/>
                <hr />
            </div>)
            }
    </div>
  )
}

export default Shows