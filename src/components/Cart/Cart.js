import React, {Component} from 'react'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../shoppingcart/Context'
import CartList from './CartList'
import CartTotal from './CartTotal'
export default class Cart extends Component {
    render(){

        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <h1 className="text-center">Your Cart</h1>
                                     <CartColumn />        
                                     <CartList value={value}/>
                                     <CartTotal value={value} history={this.props.history} />
                                </React.Fragment>
                            )
                        }
                        else{
                            return <EmptyCart />
                        }
                    } }
                </ProductConsumer>
                
                
            </section>
        )
    }
}