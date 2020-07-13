import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'

export default class Details extends Component {
    render(){
        
        return(
            <ProductConsumer>
               
                {(value) =>{
                   const {id, company,img,info,price,title,inCart} = value.detailProduct;
                   return (
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>    
                            </div>
                            <div className="row">    
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="Product"/>
                                </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4>
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                        <Link to="/products">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Back to Product</button>{/* Buttons*/}
                                        </Link>    
                                        <button type="button" className="btn btn-sm btn-outline-secondary" disabled={inCart?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? "inCart" : "add to Cart"}    
                                        </button>
                                        
                                    </div>
                               </div>    
                           </div>    
                        
                   )
                }}
            </ProductConsumer>
        )
    }

}