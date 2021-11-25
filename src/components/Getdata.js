import React, { useState, useEffect } from "react";
import axios from "axios";


const Getdata = ({startdate, enddate}) => {

    //Both start and end dates should be included in a date range.
    //Timestamp to date: new Date(1636701329000).toLocaleString();
    let timestampStart = (new Date(startdate).getTime());
    let timestampEnd = (new Date(enddate).getTime() + (1*60*60*1000));
    
    console.log(timestampStart);
    console.log(timestampEnd);

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`)
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    console.log(data);
    
    return (
        <div>
        
            <h4>The longest downward trend within the given date range:</h4>
            <p>How many days?</p>
            <h4>The highest trading volume within the given date range:</h4>
            <p>Which date?</p>
            <h4>The best day for buying and selling bitcoin to maximize profits: </h4>
            <p>Date:</p>
              {/* If the price only decreases in the date range, your
              output should indicate that one should not buy (nor sell) 
              bitcoin on any of the days. Expected output: A pair of days: 
              The day to buy and the day to sell. In the case when one
              should neither buy nor sell, return an indicative output of your choice. */}

        </div>
    )
}

export default Getdata;