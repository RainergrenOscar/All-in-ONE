import React from 'react';
import "./Coin.scss"

const Coin = ({name,icon,price,symbol}) => {
    return <div className='coin'>
        <div className="item"><h3>{name}</h3>
        <img src={icon} alt="" />
        <p>$ {price}</p>
        <p>Symbol : {symbol}</p>
        </div>
        
  </div>;
};

export default Coin;