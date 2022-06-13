import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" 
            alt=""/>
        <div className='home__row'>
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5} />
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5} />

        </div>
        <div className='home__row'>
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5} />
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5}/>
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5} />

        </div>
        <div className='home__row'>
        <Product title='The Lean Startup' price={29.99} image="https://m.media-amazon.com/images/I/71edjA10hZL._SX522_.jpg" rating={5} />

        </div>
        </div>
    </div>
  )
}

export default Home