import React, { createContext, useState,useContext } from "react"

const OrderContext = createContext()
const SetOrderContext = createContext()

export const ContextProvider = ({ children }) => {
    const [order, setOrder] = useState({
            numberOfTickect:0,
            ticketClass:'',
            ticketPrice:'',
            ticketartist:'',
            ticketshowlocation:'',
            ticketshowtime:'',
        });

    return (
        <SetOrderContext.Provider value={setOrder}>
            <OrderContext.Provider value={order} >
                {children}
            </OrderContext.Provider>
        </SetOrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext)
export const useSetOrderContext = () => useContext(SetOrderContext)

