import React, { useState } from "react";
import Form from "./Form";
import LongestDownward from "./LongestDownward";
import HighestVolume from "./HighestVolume";
import BestDay from "./BestDay";

 
const Stats = () => {

  const [data, setData] = useState({prices: [], market_caps: [], total_volumes: []});

  return (
    <div>
      <h2>Bitcoin's statistics</h2>
      <h3>Select date range:</h3>

      <div id="form">
        <Form setData={setData} />
      </div>
      <div id="data">
        {(data.prices.length > 0) ? <LongestDownward data={data} /> : <p/>}
        {(data.total_volumes.length > 0) ? <HighestVolume data={data} /> : <p/>}
        {(data.prices.length > 0) ? <BestDay data={data} /> : <p/>}        
      </div>

    </div>
  );
}
 
export default Stats;