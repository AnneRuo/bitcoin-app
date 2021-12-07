import React, { useState } from "react";
import Form from "./Form";
import LongestDownward from "./LongestDownward";
import HighestVolume from "./HighestVolume";
import BestDay from "./BestDay";

 
const Stats = () => {

  const [data, setData] = useState({prices: [], market_caps: [], total_volumes: []});
  console.log(data);

  return (
    <div>
      <h2>Bitcoin's statistics</h2>
      <h4>Select date range:</h4>

      <div id="form">
        <Form setData={setData} />
      </div>
      <div id="data">
        <LongestDownward data={data} />
        <HighestVolume data={data} />
        <BestDay data={data} />
      </div>

    </div>
  );
}
 
export default Stats;