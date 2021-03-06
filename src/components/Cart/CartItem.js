import React from 'react'

export default function EmptyCart({item, value}) {
    const {id, title,img, price,total, count} = item;
    const {increment, decrement, removeItem} = value;
    return(
        
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img className="img-fluid" src={img} style={{width:"5rem", height:"5rem"}} alt="Product" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product:</span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price:</span>
                    {price}
                </div>
                <div className="col-10 mx-auto my-2 my-lg-0 col-lg-2">
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)
                        }>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)
                        }>+</span>
                    </div>    
                </div>

                <div className="col-10 mx-auto col-lg-2">
                     <div className="cart-icon" onClick={()=>removeItem(id)}>
                         <i className="fas fa-trash">remove</i>
                     </div>           
                </div>        

                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: $ {total}</strong>
                </div>
                
                    
            </div>    
        
    )
}