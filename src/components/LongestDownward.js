import React from "react";

const LongestDownward = ({data}) => {

    let prices = data.prices;
    //console.log(prices);

    //Definition of a downward trend shall be: “Price of day N is lower than price of day N-1”
    //Expected output: The maximum amount of days bitcoin’s price was decreasing in a row.

    let longestPeriod = 0;
    let counter = 0;

    if (prices.length > 1) {
        for(let i = 1; i < prices.length; i++) {
            let priceCurr = prices[i][1];
            let pricePrev = prices[i-1][1];
    
            if (priceCurr < pricePrev) {
                counter++;
                if (counter > longestPeriod) {
                    longestPeriod = counter;
                }
            } else if (priceCurr >= pricePrev) {
                counter = 0;
            }
        }
    }
    
    return (
        <div>
            <h4>The longest bearish (downward) trend within the given date range:</h4>
            <p>Maximum days bitcoin's price was decreasing in a row was {longestPeriod} days.</p>
        </div>
      );

}

export default LongestDownward;