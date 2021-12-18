
export const Getdata = async (timestampStart, timestampEnd) => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${timestampStart}&to=${timestampEnd}`;
    const response = await fetch(url);
    return await response.json();
}