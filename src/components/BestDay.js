import React from "react";

const BestDay = ({data}) => {

    let prices = data.prices;
    //console.log(prices);
    
    //Find max difference between two days
    let maxDifference = prices[1][1] - prices[0][1];
    let dayToBuy = null;
    let dayToSell = null;

    for(let i = 0; i < prices.length; i++){
      for(let j = i + 1; j < prices.length; j++){
          if (prices[j][1] - prices[i][1] >= maxDifference) {
              dayToBuy = prices[i][0];
              dayToSell = prices[j][0];
              maxDifference = prices[j][1] - prices[i][1];
          };
      };
    };

    // If the price only decreases in the date range, your
    // output should indicate that one should not buy (nor sell) 
    // bitcoin on any of the days. 
    
    let dayToBuyDate;
    let dayToSellDate;

    if (dayToBuy == null && dayToSell == null) {
      dayToBuyDate = "You should not buy bitcoin on any of the days"
      dayToSellDate = "You should not sell bitcoin on any of the days"
    } else {
      dayToBuyDate = new Date(dayToBuy).toDateString();
      dayToSellDate = new Date(dayToSell).toDateString();
    }

    return (
        <div>
            <h3>The best day for buying and selling bitcoin to maximize profits: </h3>
            <p>Day to buy: {dayToBuyDate} </p>
            <p>Day to sell: {dayToSellDate} </p>
        </div>
      );

}

export default BestDay;