import React, { useState, useEffect } from "react";
import axios from "axios";


//'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400'
//`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`

export const Getdata = async (timestampStart, timestampEnd) => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`;
    const response = await fetch(url);
    return await response.json();
}