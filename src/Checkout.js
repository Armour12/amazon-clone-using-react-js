import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
<<<<<<< HEAD
import Product from './Product';

=======
>>>>>>> ad601b981af8fca04b9f4fd7737668fd06d929a0
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
        <div className='checkout__title'>
          <h2>Your Shopping Basket</h2>
          </div>
        </div>
        <div className='checkout__right'>
          <h2>The subtotal will go here</h2>
          <Subtotal />
        </div>
        {/* <Subtotal/>
        <Product /> */}
    </div>
  )
}

export default Checkout