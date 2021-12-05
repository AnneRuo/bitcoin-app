import React, { useState, useEffect } from "react";
import axios from "axios";
import LongestDownward from "./LongestDownward";
import HighestVolume from "./HighestVolume";
import BestDay from "./BestDay";


//'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400'
//`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`

function Getdata(timestampStart, timestampEnd) {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('effect')
        axios
          .get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`)
          .then(response => {
            console.log('promise fulfilled')
            setData(response.data)
          })
      }, [])
      console.log('render', data.length)
      console.log(JSON.stringify(data))

    
      return (
        <div>

            <LongestDownward />
            <HighestVolume />
            <BestDay />
            
        </div>
    )

}

export default Getdata;