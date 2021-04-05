import React from 'react'
import { CartContextProvider } from './CarritoContext'
import { ContextProductsProvider } from './ProductContext'
import { ContextUserProvider } from './UserContext'

function GobalContext(props) {
    return (
        <ContextUserProvider>
            <ContextProductsProvider>
                <CartContextProvider>
                    {props.children}
                </CartContextProvider>
            </ContextProductsProvider>
        </ContextUserProvider>
    )
}

export default GobalContext
