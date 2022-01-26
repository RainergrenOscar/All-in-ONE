import React from 'react';
import "./CryptoTrackerApi.scss"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from "./Coin"

const CryptoTrackerApi = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=12")
      .then((res) => {
        setCoins(res.data.coins)
      })
  }, [])

  const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <section className='cSection'>
      <div className="cSection__container">
        <div className="cSection__container__split">
          <div className="cSection__container__split__left">
            <h1>Crypto Tracker</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure omnis impedit obcaecati dignissimos labore quam voluptate necessitatibus repellendus reiciendis!ing elit. Hic, ea.</p>
          </div>
          <div className="cSection__container__split__right">
            <div className="content">
              <div className='input'>
                <input type="text" placeholder='Bitcoin...' onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="display">
        {filteredCoins.map((coin) => {
          return (
            <div className='test'>
          <Coin 
            key={coin.id}
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
          /></div>
        )})}
                </div>
            </div>
          </div>
        </div>
      </div>

    </section>




  );
};

export default CryptoTrackerApi;
