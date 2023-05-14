import React, { createContext, useState,useContext } from "react"

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
    const [cardInfo,setCardInfo] = useState({
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

