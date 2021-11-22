import React from "react";
import Form from "./Form";
 
const Stats = () => {
    return (
      <div>
        <h2>Bitcoin's statistics</h2>
        <h4>Select date range:</h4>

        
        {/* start and end date
        Both start and end dates should be included in a date range.*/}
        <div id="form">
          <Form />
        </div>


        <p>Tosi kivat graafit:</p>
        <ol>
          <li>How many days is the longest bearish (downward) trend within a given date range?</li>
          <li>Which date within a given date range had the highest trading volume?</li>
          <li>for a given date range, the best day for buying bitcoin, and the best day for selling the
              bought bitcoin to maximize profits. </li>
              {/* If the price only decreases in the date range, your
              output should indicate that one should not buy (nor sell) 
              bitcoin on any of the days. Expected output: A pair of days: 
              The day to buy and the day to sell. In the case when one
              should neither buy nor sell, return an indicative output of your choice. */}
        </ol>
      </div>
    );
  }
 
export default Stats;