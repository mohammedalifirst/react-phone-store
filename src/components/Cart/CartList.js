import React from 'react'
import CartItem from './CartItem'
export default function EmptyCart({value}) {
    const {cart} = value;
    return(
        <div className="container-fluid mt-5">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>
            })}   
        </div>    
    )
}