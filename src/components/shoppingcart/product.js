import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer } from './Context'
import PropTypes from 'prop-types'
export default class Product extends Component {

    render(){
        const {id, title, img, price, inCart} = this.props.product;
        console.log("Product page" + title);
        return(
                <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <ProductConsumer>
                               {(value) =>(
                               <div className="img-container p-5"
                           onClick={() => value.handleDetail(id)}>
                               <Link to="/details">
                                    <img className="card-img-top" src={img} alt="Card image cap"></img>
                               </Link>     
                               <p className="card-text">{title  }</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary" 
                                    disabled={inCart ? true : false }
                                    onClick={() => {
                                       value.addToCart(id); 
                                       value.openModal(id);
                                    }}
                                >
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>{" "}
                                 in Cart</p>) :(<p className="text-capitalize mb-0">Add to Cart</p>)
                                }</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                        )}
                                
                        </ProductConsumer>    
                    </div>     
                </div>
        
        )
    } 
}

Product.propTypes= {
    Product:PropTypes.shape({

        id:PropTypes.number,
        image:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,

    }).isRequired
};