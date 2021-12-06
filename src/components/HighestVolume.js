import React from "react";

const HighestVolume = ({data}) => {

    const volumes = data.total_volumes;
    console.log(volumes);

    //const maxObj = volumes.reduce((max, obj) => (max.volumes[1] > obj.volumes[1]) ? max : obj);


    //Timestamp to date: new Date(1636701329000).toLocaleString();
    const highestDay = new Date(1636701329000).toLocaleString();
    

    return (
        <div>
            <h4>The highest trading volume within the given date range:</h4>
            <p>Highest volume {} was on {highestDay} </p>
        </div>
      );

}

export default HighestVolume;