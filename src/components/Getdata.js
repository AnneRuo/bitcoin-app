import React, { useState, useEffect } from "react";
import axios from "axios";
import LongestDownward from "./LongestDownward";
import HighestVolume from "./HighestVolume";
import BestDay from "./BestDay";


const fetchData = (timestampStart, timestampEnd) => {
    return axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`)
        .then((response) => console.log(response.data));
}


const Getdata = ({timestampStart, timestampEnd}) => {

    
    //Timestamp to date: new Date(1636701329000).toLocaleString();   
  

/*     useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`)
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    console.log(data); */
    
    return (
        <div>
            <LongestDownward />
            <HighestVolume />
            <BestDay />
            
        </div>
    )
}

export default Getdata;