import React, {Component} from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'

export default class extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {id,title,price,img} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else {
                            return(
                                <div id="modalcontainer">
                                  <div className="container">  
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 
                                col-lg-4 text-center text-capitalize">
                                            <h5>Item added to the Cart</h5>
                                            <img src={img} className="image-fluid" alt="Product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price} </h5>
                                            <Link to="/products">
                                                <button type="button" onClick={() =>{
                                                    closeModal()
                                                }}
                                                className="btn btn-sm btn-outline-secondary">store</button>
                                            </Link>
                                            <Link to="/cart">
                                                <button type="button" onClick={() =>{
                                                    closeModal()
                                                }}
                                                className="btn btn-sm btn-outline-secondary">Go to Cart</button>
                                            </Link>    
                                        </div>
                                    </div>
                                   </div>     
                            </div>   
 
                            )    
                    }
                }}
            </ProductConsumer>
        )
    }
}