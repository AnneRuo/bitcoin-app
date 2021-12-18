import React from "react";

const HighestVolume = ({data}) => {

    let volumes = data.total_volumes;
    //console.log(volumes);
    
    let highestVol = volumes.reduce(function (a, b) {
        return Math.max(a, b[1]);
    }, 0);
    
    let highestVolTimestamp;
    volumes.forEach((volume) => {
        if(volume[1] === highestVol) {
            highestVolTimestamp = volume[0];
        }
    });
    
    const highestDay = new Date(highestVolTimestamp).toDateString();
    
    return (
        <div>
            <h3>The highest trading volume within the given date range:</h3>
            <p>Highest volume {highestVol} was on {highestDay} </p>
        </div>
      );

}

export default HighestVolume;