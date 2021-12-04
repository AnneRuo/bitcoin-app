import React from "react";

const BestDay = () => {

    return (
        <div>
            <h4>The best day for buying and selling bitcoin to maximize profits: </h4>
            <p>Day to buy:</p>
            <p>Day to sell:</p>
              {/* If the price only decreases in the date range, your
              output should indicate that one should not buy (nor sell) 
              bitcoin on any of the days. Expected output: A pair of days: 
              The day to buy and the day to sell. In the case when one
              should neither buy nor sell, return an indicative output of your choice. */}
        </div>
      );

}

export default BestDay;