import React,{useState} from 'react';
import Coin from './Coin';

const Header = (props) =>{
    let [search,setSearch] = useState('');
    

    function handleChange(e){
        setSearch(e.target.value);
    }

    const filteredCoins = props.coins ? props.coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase())) :[];
    return (
        <div className='appcontainer'>
        <div className='searchcontainer'>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input onChange={handleChange} placeholder='Provide coin name' value={search}/>
            </form>
        </div>
        {filteredCoins.map((coin,i)=>{
            return <Coin 
                    key={i} 
                    name={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol} 
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    pricechange={coin.price_change_percentage_24h}
                    />
        })}
        </div>
    )
}

export default Header;