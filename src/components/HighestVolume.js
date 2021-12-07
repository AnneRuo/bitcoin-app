import React from "react";

const HighestVolume = ({data}) => {

    let volumes = data.total_volumes;
    console.log(volumes);
    //console.table(volumes);
    //console.log(volumes[0][1]);
    
    let highestVol = volumes.reduce(function (a, b) {
        return Math.max(b[1]);
    }, 0);
    
    let highestVolTimestamp;
    volumes.forEach((volume) => {
        if(volume[1] === highestVol) {
            highestVolTimestamp = volume[0];
        }
    });
    
    //Timestamp to date: new Date(1636701329000).toLocaleString();
    const highestDay = new Date(highestVolTimestamp).toLocaleString();
    

    return (
        <div>
            <h4>The highest trading volume within the given date range:</h4>
            <p>Highest volume {highestVolTimestamp} was on {highestDay} </p>
        </div>
      );

}

export default HighestVolume;