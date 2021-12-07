import React, { useState } from "react";
import { Getdata } from "./Getdata";

const Form = ({setData}) => {
    const [fromDate, setFromDate] = useState("2020-01-01");
    const [toDate, setToDate] = useState("2020-12-31");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Date range ' + fromDate + ' - ' + toDate);
        let timestampStart = (new Date(fromDate).getTime())/1000;
        let timestampEnd = (new Date(toDate).getTime() + (1*60*60*1000))/1000;
        
        const fetchData = await Getdata(timestampStart, timestampEnd);
        setData(fetchData);
    }    

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>
                    Start date:
                    <input type="date" name="fromdate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                    End date:
                    <input type="date" name="todate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button type="submit" id="submitBtn">Show statistics</button>
            </form>
        </div>
    );
}


export default Form;