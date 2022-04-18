import React from 'react';

const Coin = (props)=>{
    
    return (
        <div className='coin-container'>
            <div>
                <img src={props.image} alt='crypto' />
                <p>{props.name}</p>
            </div>
            <div>
                <p>Rs.{props.price}</p>
            </div>
            <div>
            {props.pricechange<0 ? (
                        <p className="red">{props.pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="green">{props.pricechange.toFixed(2)}%</p>
                    )}
            </div>
            <div>
                <p>
                    Mkt Cap: Rs.{props.marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default Coin;