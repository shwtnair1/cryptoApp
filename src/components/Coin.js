import React from 'react';

const Coin = (props)=>{
    
    return (
        <div className='coin-container'>
            <div>
                <img src={props.image} alt='crypto' />
                <p id='coin-name'>{props.name}</p>
            </div>
            <div>
                <p id='coin-price'>Rs.{props.price}</p>
            </div>
            <div>
            {props.pricechange<0 ? (
                        <p id='coin-pricechange' className="red">{props.pricechange.toFixed(2)}%</p>
                    ):(
                        <p id='coin-pricechange' className="green">{props.pricechange.toFixed(2)}%</p>
                    )}
            </div>
            <div>
                <p id='coin-cap'>
                    Mkt Cap: Rs.{props.marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default Coin;