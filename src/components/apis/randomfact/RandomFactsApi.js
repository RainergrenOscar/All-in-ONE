import React from 'react';
import "./RandomFactsApi.scss"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Yeezy from "../../../img/ye.png"

const RandomFactsApi = () => {
  const [kanye, setKanye] = useState([])

  useEffect(() => {
    axios.get("https://api.kanye.rest")
      .then((res) => {
        setKanye(res.data.quote)
      })
  }, [])
  console.log(kanye)

  const reFetch = () => {
    axios.get("https://api.kanye.rest")
      .then((res) => {
        setKanye(res.data.quote)
      })
  }
  

  return <section className='raSection'>
      <div className="raSection__container">
        <div className="raSection__container__split">
          <div className="raSection__container__split__left">
            <h1>Ye Quotes</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure omnis impedit obcaecati dignissimos labore quam voluptate necessitatibus repellendus reiciendis!ing elit. Hic, ea.</p>
          </div>
        <div className="raSection__container__split__right">
          <div className="raSection__container__split__right__card">
            <div className="raSection__container__split__right__card__header">
                <img src={Yeezy} alt="Kanye west just staring" />
              <p>"{kanye}"</p>
              <h2>- Kanye West</h2>
              <button onClick={reFetch}>New Quote</button>
            </div>

          </div>
          </div>
        </div>
      </div>

    </section>
};

export default RandomFactsApi;
