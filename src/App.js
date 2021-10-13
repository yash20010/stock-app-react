import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
        console.log(coins)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">
          <form>
            <input type="text" placeholder="Search" className="coin-input" />
          </form>
        </h1>
      </div>
    </div>
  )
}

export default App
