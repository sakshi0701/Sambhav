import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './Coin.css';

function Crypto() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => alert('Error fetching the data'))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="crypto">
      <div className="search">
        <h1 className="text-primary m-3">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="in" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin 
          key = {coin.id}
          image = {coin.image}
          name = {coin.name}
          symbol = {coin.symbol}
          price = {coin.current_price}
          volume = {coin.total_volume}
          priceChange = {coin.price_change_percentage_24h}
          marketcap = {coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default Crypto;
