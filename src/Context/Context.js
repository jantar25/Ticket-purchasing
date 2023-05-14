import React, { createContext, useState,useContext } from "react"

import Visa from '../Assets/visa.PNG'

const OrderContext = createContext()
const SetOrderContext = createContext()

const CardInfoContext = createContext()
const SetCardInfoContext = createContext()

export const ContextProvider = ({ children }) => {
    const [order, setOrder] = useState({
            numberOfTickect:0,
            ticketClass:'',
            ticketPrice:'',
            ticketartist:'',
            ticketshowlocation:'',
            ticketshowtime:'',
        });
    const [cardInfo,setCardInfo] = useState([
        {
            cardType: 'VISA',
            image:Visa,
            CardName:"Glody",
            cardNumber:"999008",
            cardExpiration:"12/23",
            cardCode:"123",
            country:"Rwanda",
            address:"Gisozi",
            address2:'Gasabo',
            city:"Kigali",
            state:true,
            postalCode:'00000',
            phoneNumber:"0785348372",
            isForFutureUse:"on",
            isForBuyTickets:"off",
            
        }
    ])

    return (
        <SetOrderContext.Provider value={setOrder}>
            <OrderContext.Provider value={order} >
                <SetCardInfoContext.Provider value={setCardInfo}>
                    <CardInfoContext.Provider value={cardInfo} >
                        {children}
                    </CardInfoContext.Provider>
                </SetCardInfoContext.Provider>
            </OrderContext.Provider>
        </SetOrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext)
export const useSetOrderContext = () => useContext(SetOrderContext)

export const useCardInfoContext = () => useContext(CardInfoContext)
export const useSetCardInfoContext = () => useContext(SetCardInfoContext)

