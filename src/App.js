import './App.css';
import Header from './components/Header';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  let [coins,setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res=>{
           setCoins(res.data)
           console.log(res.data)
        }).catch(error=>console.log(error))
      }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header coins = {coins}/>
      </header>
    </div>
  );
}

export default App;
